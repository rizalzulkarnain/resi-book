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

const { auth } = require('../middlewares/auth.js');

router.post('/', auth, validation.validateComment, addComment);
router.get('/', auth, getComments);
router.put('/:commentId', auth, validation.validateComment, updateComment);
router.delete('/:commentId', auth, deleteComment);
router.delete('/delete-all', auth, deleteAllComments);

module.exports = router;
