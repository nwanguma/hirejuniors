const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const DeveloperProfileSchema = new Schema({
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

  age: {
    type: Number,
    required: true,
  },

  sex: {
    type: String,
    required: true,
  },

  skills: {
    type: [String],
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  experience: [{
    company: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    isCurrent: {
      type: Boolean,
      default: false
    },

    from: {
      type: Date,
      default: Date.now()
    },

    to: {
      type: Date,
      default: Date.now()
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String
    }
  }],

  education: [{
    institution: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    from: {
      type: Date,
      default: Date.now()
    },

    to: {
      type: Date,
      default: Date.now()
    }
  }],

  location: {
    type: String,
    required: true,
  },

  experienceLength: {
    type: String,
    required: true,
  },

  githubURL: {
    type: String,
    required: true
  },

  website: {
    type: String,
    required: true
  },

  linkedinURL: {
    type: String,
  },

  twitterURL: {
    type: String,
  },
});

const DeveloperProfile = model('DeveloperProfile', DeveloperProfileSchema, 'developers');

module.exports = DeveloperProfile;