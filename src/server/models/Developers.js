const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const DeveloperSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  age: {
    type: Number,
    required: true,
    min: 18
  },

  sex: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  skills: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  bio: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  preferredSalary: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  education: {
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

  experienceLength: {
    type: Number,
    default: 0
  },

  githubURL: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  portfolioURL: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  linkedinURL: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
});

// DeveloperSchema.methods.toJSON = function () {
//   const developer = this;
//   const developerObject = developer.toObject();
//   return _.pick(developer, ['email']);
// };

// //methods on methods are used to generate instance methods which are methods that are called available on individual documents
// DeveloperSchema.methods.generateAuthToken = function () {
//   console.log(this);
//   console.log(typeof this);
//   const developer = this;
//   const access = 'auth';
//   const token = jwt.sign({ _id: developer._id.toHexString(), access }, 'supersecretsalt').toString();

//   developer.tokens.push({ access, token });

//   return developer.save().then(() => {
//     return token;
//   })
// };

const Developer = mongoose.model('Developer', DeveloperSchema);

module.exports = Developer;