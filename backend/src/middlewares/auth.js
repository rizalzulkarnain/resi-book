const HttpError = require('http-errors');
const { verifyAccessToken } = require('../utils/jwt');

exports.auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next(HttpError.Unauthorized('Access Token is required !'));
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    res.status(400).json({
      success: false,
      message: 'Invalid Credentials',
    });
    return next(HttpError.Unauthorized());
  }

  await verifyAccessToken(token)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((error) => {
      next(HttpError.Unauthorized(error.message));
    });
};
