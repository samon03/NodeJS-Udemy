const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  
});

