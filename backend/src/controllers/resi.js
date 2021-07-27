const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validation = require('../middlewares/validation');

exports.addResi = async (req, res) => {
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
      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      const {
        userId,
        numberResi,
        productName,
        address,
        courier,
        status,
        date,
        priceProduct,
        postagePrice,
      } = req.body;

      const addDataResi = await prisma.resi.create({
        data: {
          userId,
          numberResi,
          productName,
          address,
          courier,
          status,
          date,
          priceProduct,
          postagePrice,
        },
      });

      res.status(201).json({
        message: 'Data Resi created Successfully !',
        addDataResi,
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

exports.getResi = async (req, res) => {
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
      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      let user = user ? true : false;
      let comment = comment ? true : false;

      const dataResi = await prisma.resi.findMany({
        include: {
          user,
          comment,
        },
      });
      res.status(200).json({
        message: 'Getting Data Resi Successully !',
        dataResi,
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

exports.getSingleResi = async (req, res) => {
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
      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      const { resiID } = req.params;

      let comment = comment ? true : false;

      const dataResi = await prisma.resi.findUnique({
        where: {
          id: resiID,
        },
        include: {
          comment: true,
        },
      });

      res.status(200).json({
        message: 'Getting Single Data Resi Successully !',
        dataResi,
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

exports.updateResi = async (req, res) => {
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
      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      const { resiID } = req.params;
      const {
        numberResi,
        productName,
        address,
        courier,
        status,
        date,
        priceProduct,
        postagePrice,
      } = req.body;

      const updatedResi = await prisma.resi.update({
        where: {
          id: resiID,
        },
        data: {
          numberResi,
          productName,
          address,
          courier,
          status,
          date,
          priceProduct,
          postagePrice,
        },
      });

      res.status(200).json({
        message: 'Update Data Resi Successully !',
        updatedResi,
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

exports.deleteResi = async (req, res) => {
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
      if (errors.length) {
        return res.status(400).json({
          success: false,
          errors,
        });
      }

      const { resiID } = req.params;

      const deletedResi = await prisma.resi.delete({
        where: {
          id: resiID,
        },
      });

      res.status(200).json({
        message: 'Delete Data Resi Successully !',
        deletedResi,
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
