const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  age: {
    type: String,
  },

  sex: {
    type: String,
  },

  skills: {
    type: String,
  },

  bio: {
    type: String,
  },

  preferredSalary: {
    type: String,
  },

  education: {
    type: String,
  },

  location: {
    type: String,
  },

  experienceLength: {
    type: String,
  },

  githubURL: {
    type: String,
  },

  portfolioURL: {
    type: String,
  },

  linkedinURL: {
    type: String,
  },
});

const Developer = mongoose.model('Developer', DeveloperSchema);

module.exports = Developer;