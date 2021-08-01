const express = require('express');
const router = express.Router();

const {
  addResi,
  getResi,
  getSingleResi,
  updateResi,
  deleteResi,
} = require('../controllers/resi');

const validation = require('../middlewares/validation');
const { auth } = require('../middlewares/auth');

router.post(
  '/:userId',
  auth,
  validation.validateAddResi,
  validation.validatePrice,
  addResi
);
router.get('/:userId', auth, getResi);
router.get('/:resiId', auth, getSingleResi);
router.put(
  '/:resiId',
  auth,
  validation.validateAddResi,
  validation.validatePrice,
  updateResi
);
router.delete('/:resiID', auth, deleteResi);

module.exports = router;
