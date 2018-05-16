'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  email: {
    type: String,
    lowercase: true, 
    trim: true,
    unique: true,
    required: 'email is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'password is required'
  },
  birth: {
    type: Date,
    required: 'birthday is required'
  },
  country: {
    type: String,
    lowercase: true, 
    trim: true,
    required: 'country is required'
    //default: 'US'
  },
});

module.exports = mongoose.model('Account', AccountSchema);
