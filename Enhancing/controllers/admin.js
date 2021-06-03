const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;
    
    const product = new Product(title, imageURL, price, description);
    product.save();
    res.redirect('/');

}

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', 
    {
        pageTitle: 'Add product', 
        path: '/admin/add-product'
    });
}

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll( (products) => {
        res.render('admin/product-list', 
        {
            prods: products, 
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        });
    });
}