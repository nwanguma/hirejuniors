const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  date: {
    default: Date.now()
  }
});


const User = mongoose.model('Recruiters', UserSchema);

module.exports = User;