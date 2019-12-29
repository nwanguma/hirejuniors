const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  position: {
    type: String,
    required: true
  },

  jobsPostedCount: {
    type: Number,
    default: 0
  }
});

const Recruiter = mongoose.model('Recruiter', RecruiterSchema);

module.exports = Recruiter;