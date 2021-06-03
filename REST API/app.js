const path = require('path');

const express = require('express');
 
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((error,req, res, next) => {
    console.log(error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.use((error, req, res, next) => {
   console.log(error);
   const status = error.statusCode || 500;
   const message = error.message;
   res.status(status).json({ message: message });
});

mongoose
    .connect(
        'mongodb+srv://samon:killometer@cluster1-n1dim.mongodb.net/crud'
    )
    .then(result => {
        app.listen(8080);
        console.log('Connected');
    })
    .catch(err => {
        console.log(err);
    });