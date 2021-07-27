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
  '/',
  auth,
  validation.validateAddResi,
  validation.validatePrice,
  addResi
);
router.get('/', auth, getResi);
router.get('/:resiID', auth, getSingleResi);
router.put('/:resiID', auth, updateResi);
router.delete('/:resiID', auth, deleteResi);

module.exports = router;
