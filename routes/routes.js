const express = require('express');
const router = express.Router();
const ManageController= require('../controllers/ManageController.js')
const ProductController= require('../controllers/ProductController.js')

// Product Managing //
router.get('/get_vartype', ManageController.get_vartype);
router.get('/get_variant', ManageController.get_variant);
router.get('/get_category', ManageController.get_category);
router.get('/get_user', ManageController.get_user);
router.get('/get_role', ManageController.get_role);



router.post('/set_vartype', ManageController.set_vartype);
router.post('/set_variant', ManageController.set_variant);
router.post('/set_category', ManageController.set_category);
router.post('/set_auth', ManageController.set_auth);
router.post('/set_role', ManageController.set_role);

router.post('/post_product', ProductController.post_product);

module.exports = router;

