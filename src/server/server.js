const express = require('express');
const { mongoose } = require('./db/mongoose');

const { router: developers } = require('./routes/api/developers');
const { router: jobs } = require('./routes/api/jobs');
const { router: recruiters } = require('./routes/api/recruiters');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/developers', developers);
app.use('/api/jobs', jobs);
app.use('/api/recruiters', recruiters);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});