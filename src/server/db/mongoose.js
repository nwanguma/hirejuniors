const mongoose = require('mongoose');

const { mongoDevURI } = require('../config/keys');

// mongoose.Promise = global.Promise;

mongoose
  .connect(mongoDevURI + '/hirejuniors')
  .then(() => console.log('Connected to the store!'))
  .catch(() => console.log('Failed to connect to the store'));

module.exports = { mongoose };