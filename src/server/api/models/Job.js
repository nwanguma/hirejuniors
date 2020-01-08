const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const now = new Date();

const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  title: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  requirement: {
    type: String,
    required: true,
  },

  datePosted: {
    type: Number,
    default: now
  },

  lastEdited: {
    type: Number,
    default: now
  },

  deadline: {
    type: Date,
    default: now
  },

  contact: {
    type: String,
    required: true
  }
});

const Job = model('Job', JobSchema, 'jobs');

module.exports = Job;