const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const { router: users } = require('./api/routes/users');
const { router: devProfile } = require('./api/routes/devProfile');
const { router: jobs } = require('./api/routes/jobs');
const { router: recruiterProfile } = require('./api/routes/recruiterProfile');
const { router: adminProfile } = require('./api/routes/adminProfile');
const { router: articles } = require('./api/routes/articles');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(passport.initialize());
require('./config/passport')(passport);

// //enable cors
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Headers', 'localhost:3000');

//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//   next();
// })

//Middleware bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Express route middleware
app.use('/api/users', users);
app.use('/api/recruiterprofile', recruiterProfile);
app.use('/api/devprofile', devProfile);
app.use('/api/adminprofile', adminProfile);
app.use('/api/jobs', jobs);
app.use('/api/articles', articles);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});