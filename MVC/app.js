const path = require('path');

const http = require('http');

const express = require('express');

const adminRouter = require('./routes/admin');

const shopRouter = require('./routes/shop');

const errorControllers = require('./controllers/error');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);

app.use(shopRouter);

app.use(errorControllers.get404);

app.listen(3000);