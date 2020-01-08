const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const router = express.Router();
const Job = require('../models/Job');
const { secretOrKey } = require('../../config/keys');

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
  const token = req.header('Authorization').slice(7);

  const { title, company, location, description, requirement, contact, deadline } = req.body;

  jwt.verify(token, secretOrKey, (err, decoded) => {
    if (!decoded) {
      new Error('Failed to verify user token' + err);
    } else if (decoded) {

      const role = decoded.role;

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
            res.status(201).json({
              message: "success",
              body: doc
            })
          }).catch((err) => {
            res.status(400).json({ error: 'Failed to create job' });
          })
      }
    }
  });
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
    const token = req.header('Authorization').slice(7);

    jwt.verify(token, secretOrKey, (err, decoded) => {
      if (!decoded) {
        new Error('Failed to verify user token' + err);
      } else if (decoded) {

        const role = decoded.role;

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
      }
    });
  })
  // @route GET api/jobs/id
  // @desc Get specific job by id
  // @access Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = req.header('Authorization').slice(7);

    jwt.verify(token, secretOrKey, (err, decoded) => {
      if (!decoded) {
        new Error('Failed to verify user token' + err);
      } else if (decoded) {

        const role = decoded.role;

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
      }
    });
  });

module.exports = { router };