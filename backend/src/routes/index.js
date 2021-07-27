const express = require('express');
const router = express.Router();
const httpErrors = require('http-errors');

const user = require('./user');
const resi = require('./resi');
const comment = require('./comment');

router.use('/auth', user);
router.use('/resi', resi);
router.use('/comment', comment);

router.use((req, res, next) => {
  next(httpErrors.NotFound('Resources Not Found !'));
});

router.use((error, req, res) => {
  res.status(error.status || 500).json({
    status: false,
    error: error.message,
  });
});

module.exports = router;
