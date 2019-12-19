const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

const { router: users } = require('./routes/api/users');
const { router: developers } = require('./routes/api/developers');
const { router: jobs } = require('./routes/api/jobs');
const { router: recruiters } = require('./routes/api/recruiters');
const { router: articles } = require('./routes/api/articles');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/recruiters', recruiters);
app.use('/api/developers', developers);
app.use('/api/jobs', jobs);
app.use('/api/articles', articles);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});