const jwt = require('jsonwebtoken');
const httpError = require('http-errors');
require('dotenv').config();

exports.signAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ payload }, process.env.JWT_SECRET, (err, token) => {
      if (err) {
        reject(httpError.InternalServerError());
      }
      resolve(token);
    });
  });
};

exports.verifyAccessToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        const message =
          err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message;
        return reject(httpError.Unauthorized(message));
      }
      resolve(payload);
    });
  });
};
