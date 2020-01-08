const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const { router: users } = require('./api/routes/users');
const { router: devProfile } = require('./api/routes/devProfile');
const { router: jobs } = require('./api/routes/jobs');
const { router: recruiterProfile } = require('./api/routes/recruiterProfile');
const { router: articles } = require('./api/routes/articles');

const app = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());
require('./config/passport')(passport);

//Middleware bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Express route middleware
app.use('/api/users', users);
app.use('/api/recruiterProfile', recruiterProfile);
app.use('/api/devProfile', devProfile);
app.use('/api/jobs', jobs);
app.use('/api/articles', articles);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});