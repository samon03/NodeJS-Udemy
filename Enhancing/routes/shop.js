const path = require('path');

const shopControllers = require('../controllers/shop');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/' , shopControllers.getIndex);

router.get('/products' , shopControllers.getProducts);

router.get('/cart' , shopControllers.getCart);

router.get('/checkout' , shopControllers.getCheckout);

router.get('/order' , shopControllers.getOrder);

module.exports = router;