const express = require('express');
const router = express.Router();
const ProductManageController= require('../controllers/productManage.js')


// Product Managing //
router.post('/set_vartype', ProductManageController.set_vartype);
router.post('/set_variant', ProductManageController.set_variant);
router.post('/set_category', ProductManageController.set_category);

module.exports = router;

