const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const products = [];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product' , (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;