const path = require('path');

const adminControllers = require('../controllers/admin');

const express = require('express');

const router = express.Router();

router.get('/add-product', adminControllers.getAddProduct);

router.post('/add-product' , adminControllers.postAddProduct);

router.get('/products', adminControllers.getAdminProducts);

module.exports = router;