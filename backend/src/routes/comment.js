const express = require('express');
const router = express.Router();

const {
  addComment,
  getComments,
  updateComment,
  deleteComment,
  deleteAllComments,
} = require('../controllers/comment');
const validation = require('../middlewares/validation');

router.post('/', validation.validateComment, addComment);
router.get('/', getComments);
router.put('/', updateComment);
router.post('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);
router.delete('/', deleteAllComments);

module.exports = router;
