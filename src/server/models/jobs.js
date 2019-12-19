const mongoose = require('mongoose');

const now = new Date();

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  company: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  location: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  requirement: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  datePosted: {
    type: Number,
    default: now.getTime()
  },

  lastEdited: {
    type: Number,
    default: now.getTime()
  },

  deadline: {
    type: Number,
    default: now.getTime()
  },

  contact: {
    type: String,
    trim: true,
    minlength: 15
  }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;