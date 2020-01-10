const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const RecruiterProfileSchema = new Schema({
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

  company: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: true,
  },

  jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }]
});

const RecruiterProfile = model('RecruiterProfile', RecruiterProfileSchema, 'recruiters');

module.exports = RecruiterProfile;