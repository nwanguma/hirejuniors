const express = require('express');
const { mongoose } = require('./db/mongoose');

const { router: developerRouter } = require('./routes/api/developers');
const { router: jobRouter } = require('./routes/api/jobs');
const { router: recruitersRouter } = require('./routes/api/recruiters');

const app = express();
const port = process.env.PORT || 3000;

app.use('/developers', developerRouter);
app.use('/jobs', jobRouter);
app.use('/recruiters', recruiterRouter);


app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});