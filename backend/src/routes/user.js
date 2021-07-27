const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  resetPasswordUser,
  logoutUser,
  getUser,
  forgotPasswordUser,
} = require('../controllers/user');

const validation = require('../middlewares/validation');
const { auth } = require('../middlewares/auth');

router.post(
  '/register',
  validation.validateEmail,
  validation.validatePassword,
  validation.validatePasswordMatch,
  validation.validateName,
  registerUser
);
router.post('/login', loginUser);
router.post('/reset-password', validation.validateEmail, resetPasswordUser);
router.patch('/reset-password', forgotPasswordUser);
router.post('/logout', logoutUser);
router.get('/user/:id', auth, getUser);

module.exports = router;
