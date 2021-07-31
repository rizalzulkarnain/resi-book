const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validation = require('../middlewares/validation');

exports.addComment = async (req, res) => {
  try {
    const validationErrors = validation.validationResult(req);

    const errors = [];

    if (!validationErrors.isEmpty) {
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

      const { message, messageBy, resiId, userId } = req.body;

      const addComment = await prisma.comment.create({
        data: {
          message,
          messageBy,
          resiId,
          userId,
        },
      });

      res.status(201).json({
        message: 'Add Comment Successfully',
        addComment,
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

exports.getComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
        resi: true,
      },
    });

    res.status(200).json({
      message: 'Getting Comments Successfully!',
      comments,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const validationErrors = validation.validationResult(req);

    const errors = [];

    if (!validationErrors.isEmpty) {
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

      const { message } = req.body;

      const updateComment = await prisma.comment.update({
        data: {
          message,
        },
      });

      res.status(200).json({
        message: 'Update Comment Successfully',
        updateComment,
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

exports.deleteComment = async (req, res) => {
  try {
    const { commentID } = req.params;

    const deletedComment = await prisma.comment.delete({
      where: {
        id: commentID,
      },
    });

    res.status(200).json({
      message: 'Delete Comment Successully !',
      deletedComment,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
