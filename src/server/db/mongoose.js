const mongoose = require('mongoose');

const { mongoDevURI } = require('../config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(mongoDevURI + '/hirejuniors');

module.exports = { mongoose };