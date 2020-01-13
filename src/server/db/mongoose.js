const mongoose = require('mongoose');

const { mongoDevURI } = require('../config/keys');

mongoose
  .connect(mongoDevURI + '/hirejuniors',
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongoDB!'))
  .catch(() => console.log('Failed to connect to the database'));

module.exports = { mongoose };