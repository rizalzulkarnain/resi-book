const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

const validation = require('../middlewares/validation');
const { signAccessToken } = require('../utils/jwt');
const { login, register } = require('../service/auth');
const { randomPinNumber } = require('../utils/randomPin');
const { emailProcessor } = require('../service/emailHelper');

const salt = bcrypt.genSaltSync(12);
const options = {
  expires: new Date(
    Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
};

exports.registerUser = async (req, res, next) => {
  try {
    const validationErrors = validation.validationResult(req);
    const errors = [];
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach((error) => {
        errors.push(error.param);
        return res.status(400).json({
          error: error.msg,
        });
      });
    } else {
      const existingEmail = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });

      const existingName = await prisma.user.findFirst({
        where: {
          name: req.body.name,
        },
      });

      if (existingEmail || existingName) {
        errors.push('email');
        errors.push('name');
        res.status(400).json({
          error: 'Email or Name already exist !',
        });
      }

      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      let user = await prisma.user.create({
        data: {
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
          name: req.body.name,
        },
      });
      user = await register(req.body);

      const token = signAccessToken(user);

      if (process.env.NODE_ENV === 'production') {
        options.secure = true;
      }

      res.status(200).cookie('token', token, options).json({
        message: 'User Register Success !',
        user,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const errors = [];

    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      errors.push('email');
      errors.push('password');
      res.status(400).json({
        success: false,
        error: 'Invalid Email or Password',
      });
    } else {
      const checkPassword = await bcrypt.compareSync(password, user.password);

      if (!checkPassword) {
        errors.push('email');
        errors.push('password');
        res.status(400).json({
          success: false,
          error: 'Invalid Credential !',
        });
      }

      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      const token = signAccessToken(user);

      if (process.env.NODE_ENV === 'production') {
        options.secure = true;
      }

      const validUser = await login(req.body);
      await res.status(200).cookie('token', token, options).json({
        message: 'login sucess',
        user: validUser,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.resetPasswordUser = async (req, res) => {
  try {
    const validationErrors = validation.validationResult(req);
    const errors = [];

    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach((error) => {
        errors.push(error.param);
        return res.status(400).json({
          error: error.msg,
        });
      });
    } else {
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        errors.push('email');
        res.status(400).json({
          error: 'Please Register First !',
        });
      }

      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      if (user) {
        const pinLength = 6;
        const randomPin = await randomPinNumber(pinLength);

        const setPinUser = await prisma.resetPin.create({
          data: {
            email: user.email,
            pin: Number(randomPin),
          },
        });

        const result = await emailProcessor(setPinUser.email, setPinUser.pin);

        res.status(200).json({
          message: 'Pin Send Successfully !',
          result,
          setPinUser,
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.forgotPasswordUser = async (req, res) => {
  try {
    const validationErrors = validation.validationResult(req);
    const errors = [];

    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach((error) => {
        errors.push(error.param);
        return res.status(400).json({
          error: error.msg,
        });
      });
    } else {
      const { email, pin, password } = req.body;
      const getPin = await prisma.resetPin.findFirst({
        where: {
          email,
          pin,
        },
      });

      if (!getPin) {
        errors.push('email');
        errors.push('pin');
        res.status(400).json({
          error: 'Please Register First !',
        });
      }

      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      if (getPin.id) {
        const dbDate = getPin.createdAt;
        const expiresIn = 1;
        let expireDate = dbDate.setDate(dbDate.getDate() * expiresIn);
        const today = new Date();

        if (today < expireDate) {
          res.status(400).json({
            success: false,
            error: 'Invalid or Expired Date',
          });
        }

        const hashPass = await bcrypt.hashSync(password, salt);

        const updatedPassword = await prisma.user.update({
          where: {
            email: getPin.email,
          },
          data: {
            password: hashPass,
          },
        });

        const deletedPin = await prisma.resetPin.delete({
          where: {
            id: getPin.id,
          },
        });

        res.status(200).json({
          message: 'Update Password and Delete Pin Successfully',
          updatedPassword,
          deletedPin,
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.logoutUser = (req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    message: 'User Id Successfully logout',
    user: null,
  });
};

exports.getUser = async (req, res) => {
  try {
    const userId = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: 'Getting User ID Successully !',
      userId,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
