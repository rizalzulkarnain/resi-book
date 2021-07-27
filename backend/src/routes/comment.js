const express = require('express');
const router = express.Router();

const {
  addComment,
  getComments,
  updateComment,
  deleteComment,
  deleteAllComments,
} = require('../controllers/comment');

router.post('/', addComment);
router.get('/', getComments);
router.put('/', updateComment);
router.post('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);
router.delete('/', deleteAllComments);

module.exports = router;
