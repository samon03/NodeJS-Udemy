const path = require('path');

const productsControllers = require('../controllers/products');

const express = require('express');

const router = express.Router();

router.get('/add-product', productsControllers.getAddProduct);

router.post('/add-product' , productsControllers.postAddProduct);

module.exports = router;