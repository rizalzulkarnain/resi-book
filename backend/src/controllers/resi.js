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

      const { userId } = req.params;
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
    const { userId } = req.params;

    const getResi = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        Resi: true,
        Comment: true,
      },
    });

    const totalPriceProduct = getResi.Resi.map((o) => o.priceProduct).reduce(
      (a, b) => a + b
    );

    const totalPostagePrice = getResi.Resi.map((o) => o.postagePrice).reduce(
      (a, b) => a + b
    );

    const getMonth = getResi.Resi.map((o) => o.date.split(' ')[1]);
    const month = [...new Set(getMonth)];

    res.status(200).json({
      message: 'Getting Data Resi Successully !',
      getResi,
      total: {
        totalPriceProduct,
        totalPostagePrice,
        month,
      },
    });
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
    const { resiId } = req.params;

    const dataResi = await prisma.resi.findUnique({
      where: {
        id: resiId,
      },
      include: {
        comment: true,
      },
    });

    res.status(200).json({
      message: 'Getting Single Data Resi Successully !',
      dataResi,
    });
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

      const { resiId } = req.params;
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
          id: resiId,
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
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
