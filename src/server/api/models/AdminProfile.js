const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const AdminProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  articles: [{
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }],

  jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }]
});

const AdminProfile = model('AdminProfile', AdminProfileSchema, 'admins');

module.exports = AdminProfile;