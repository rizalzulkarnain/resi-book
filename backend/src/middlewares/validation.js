const { body, validationResult } = require('express-validator');

module.exports.validatePassword = body('password')
  .isLength({ min: 4 })
  .trim()
  .withMessage('The password has to be at least 4 characters long.');

module.exports.validatePasswordMatch = body('password')
  .custom((value, { req }) => {
    if (value !== req.body.confirmPassword) {
      return false;
    }
    return true;
  })
  .withMessage("Password don't match");

module.exports.validateEmail = body('email')
  .isEmail()
  .withMessage('Please enter a valid email address');

module.exports.validateName = body('name')
  .isLength({ min: 3 })
  .withMessage('Name has to be at least 3 characters long.');

module.exports.validateAddResi = body(['numberResi', 'productName', 'address'])
  .isLength({ min: 3 })
  .withMessage('Must be at least 3 characters long.');

module.exports.validatePrice = body(['priceProduct', 'postagePrice'])
  .isDecimal()
  .isLength({ min: 3 })
  .withMessage('Price Field  has to be at least 3 characters long.');

module.exports.validationResult = validationResult;
