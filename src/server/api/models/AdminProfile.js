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
  }
});

const AdminProfile = model('AdminProfile', AdminProfileSchema, 'admins');

module.exports = AdminProfile;