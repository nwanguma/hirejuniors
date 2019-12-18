const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => res.json({ jobs: 'jobs' }))
  .post((req, res) => res.json({ post: 'post' }))

module.exports = { router };

//I want a database for jobs
//I want a database for recruiters auth
//I want a database for developers
//I want a database for articles