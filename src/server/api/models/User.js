const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

const User = model('User', UserSchema, 'users');

module.exports = User;