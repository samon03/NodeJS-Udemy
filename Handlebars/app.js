const path = require('path');

const http = require('http');

const express = require('express');

const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');

const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.engine('hbs', expressHbs(
    {
        layoutDir: 'view/layouts/', 
        defaultLayout: 'main-layout',
        extname: 'hbs' 
    }));

app.set('view engine', 'hbs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.router);

app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(7000);