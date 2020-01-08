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
  },

  articles: [{
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }],

  jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }]
});

const User = model('User', UserSchema, 'users');

module.exports = User;