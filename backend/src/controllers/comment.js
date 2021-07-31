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

      const { message } = req.body;

      const addComment = await prisma.comment.create({
        data: {
          message,
          messageBy: user.name,
          updatedAt,
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
  res.send('get comment');
};

exports.updateComment = async (req, res) => {
  res.send('update comment');
};

exports.deleteComment = async (req, res) => {
  res.send('delete comment');
};

exports.deleteAllComments = async (req, res) => {
  res.send('delete all comments');
};
