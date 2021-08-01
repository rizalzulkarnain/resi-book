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

      const { resiId } = req.params;
      const { message, messageBy, email } = req.body;

      const addComment = await prisma.comment.create({
        data: {
          message,
          messageBy,
          email,
          resiId,
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
    const { resiId } = req.params;

    const getComments = await prisma.resi.findUnique({
      where: {
        id: resiId,
      },
      include: {
        comment: true,
        user: true,
      },
    });

    res.status(200).json({
      message: 'Getting Comments Successfully!',
      getComments,
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

      const { commentId } = req.params;
      const { message } = req.body;

      const updateComment = await prisma.comment.update({
        where: {
          id: commentId,
        },
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
    const { commentId } = req.params;

    const deletedComment = await prisma.comment.delete({
      where: {
        id: commentId,
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

exports.deleteAllComments = async (req, res) => {
  try {
    const { resiId } = req.body;

    const deletedAllComments = await prisma.comment.deleteMany({
      where: {
        id: resiId,
      },
    });

    res.status(200).json({
      message: 'Delete All Comments Succesfully.',
      deletedAllComments,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
