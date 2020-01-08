const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const Job = require('../models/Job');
const User = require('../models/User');
const { secretOrKey } = require('../../config/keys');

const router = express.Router();

// @route GET api/jobs
// @desc Get all jobs
// @access Public
router.get('/', (req, res) => {
  Job.find().then((docs) => {
    res.json(docs)
  });
});

// @route POST api/jobs/create
// @desc Create new job
// @access Private Admin and Recruiter
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { title, company, location, description, requirement, contact, deadline } = req.body;

  const role = req.user.role;

  if (role === 'admin' || role === 'recruiter') {
    const job = new Job({
      title,
      company,
      location,
      description,
      requirement,
      contact,
      deadline
    });

    job.save()
      .then((doc) => {
        const job = _.pick(doc,
          ['title', 'company', 'location', 'description',
            'requirement', 'contact', 'deadline']);

        User.findByIdAndUpdate(req.user._id, { $push: { jobs: doc._id } }, { new: false })
          .then((user) => console.log(user))
          .catch((err) => console.log(error));

        res.status(201).json({
          message: "success",
          body: doc
        })
      }).catch((err) => {
        res.status(400).json({ error: 'Failed to create job' });
      })
  }
});

// @route GET api/jobs/id
// @desc Get specific job by id
// @access Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.params.id;
    Job.findById(id).then((doc) => {
      if (!doc) {
        return res.header(404).json({ error: 'Job not found' });
      }

      const job = _.pick(doc,
        ['title', 'company', 'location', 'description',
          'requirement', 'contact', 'deadline']);

      res.json({
        message: 'Success',
        body: job
      });
    }).catch((err) => {
      res.status(400).json({
        error: 'Bad request'
      });
    })
  })
  // @route GET api/jobs/id
  // @desc Get specific job by id
  // @access Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'recruiter') {
      const id = req.params.id;

      Job.findByIdAndRemove(id).then((doc) => {
        if (!doc) return res.status(400).json({ error: 'Job not found' });

        const job = _.pick(doc,
          ['title', 'company', 'location', 'description',
            'requirement', 'contact', 'deadline']);

        res.send({
          message: 'Success',
          body: job
        });
      }).catch((err) => {
        res.status(400).send('An error occured')
      })
    }
  })
  // @route GET api/jobs/id
  // @desc Get specific job by id
  // @access Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'recruiter') {
      const id = req.params.id;

      Job.findById()
        .then()
        .catch()

      Job.findByIdAndUpdate(id, {
        $set: {

        }
      }).then((doc) => {
        if (!doc) return res.status(400).json({ error: 'Job not found' });

        const job = _.pick(doc,
          ['title', 'company', 'location', 'description',
            'requirement', 'contact', 'deadline']);

        res.send({
          message: 'Success',
          body: job
        });
      }).catch((err) => {
        res.status(400).send('An error occured');
      });
    }
  });

module.exports = { router };