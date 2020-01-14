const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const Job = require('../models/Job');
const RecruiterProfile = require('../models/RecruiterProfile');
const { secretOrKey } = require('../../config/keys');

const router = express.Router();

// @route GET api/jobs
// @desc Get all jobs
// @access Public
router.get('/', (req, res) => {
  Job.find().then((jobs) => {
    if (jobs.length === 0) return res.status(404).json({ message: 'No jobs to display' });

    res.json(jobs)
  }).catch(err => {
    res.status(400).json({
      name: err.name,
      message: err.message
    })
  });
});

// @route POST api/jobs/create
// @desc Create new job
// @access Private Admin and Recruiter
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'admin' || role === 'recruiter') {
    const { title, company, location, description, requirement, contact, deadline } = req.body;

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

        RecruiterProfile.findByIdAndUpdate(req.user._id, { $push: { jobs: doc._id } }, { new: false })
          .then((user) => user)
          .catch((err) => err);

        res.status(201).json({
          message: "success",
          body: job
        })
      }).catch((err) => {
        res.status(400).json({
          name: err.message,
          message: err.message
        });
      })
  }
});

// @route GET api/jobs/id
// @desc Get specific job by id
// @access Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'recruiter') {
      const id = req.params.id;

      Job.findById(id).then((doc) => {
        if (!doc) {
          return res.header(404).json({ message: 'Job not found' });
        }

        const job = _.pick(doc,
          ['title', 'company', 'location', 'description',
            'requirement', 'contact', 'deadline']);

        res.json({
          body: job
        });
      }).catch((err) => {
        res.status(400).json({
          name: err.name,
          message: err.message
        });
      })
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  })
  // @route DELETE api/jobs/id
  // @desc Delete specific job by id
  // @access Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'recruiter') {
      const id = req.params.id;

      Job.findByIdAndRemove(id).then((doc) => {
        if (!doc) return res.status(400).json({ error: 'Job not found' });

        RecruiterProfile.findOneAndUpdate({ user: req.user._id },
          { $pull: { articles: doc._id } },
          { new: true })
          .then((user) => user)
          .catch(err => err)

        const job = _.pick(doc,
          ['title', 'company', 'location', 'description',
            'requirement', 'contact', 'deadline']);

        res.send({
          message: 'Success',
          body: job
        });
      }).catch((err) => {
        res.status(400).json({
          name: err.name,
          message: err.message
        })
      })
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  })
  // @route PATCH api/jobs/id
  // @desc Update specific job by id
  // @access Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'recruiter') {
      const id = req.params.id;

      Job.findById(id)
        .then(job => {
          if (!job) return res.status(404).json({ message: 'Job not found' });

          const { title, company, location, description, requirement, contact } = job;
          const { titleUpdate, CompanyUpdate, locationUpdate,
            descriptionUpdate, requirementUpdate, contactUpdate, lastEdited } = req.body;

          Job.findByIdAndUpdate(id, {
            $set: {
              title: titleUpdate || title,
              company: companyUpdate || company,
              location: locationUpdate || location,
              description: descriptionUpdate || description,
              requirement: requirementUpdate || requirement,
              contact: contactUpdate || contact,
              lastEdited: lastEditedUpdate
            }
          }, { new: true })
            .then((doc) => {
              if (!doc) return res.status(400).json({ message: 'Job not found' });

              const job = _.pick(doc,
                ['title', 'company', 'location', 'description',
                  'requirement', 'contact', 'deadline']);

              res.json({
                message: 'Success',
                body: job
              });
            }).catch((err) => {
              res.status(400).json({
                name: err.name,
                message: err.message
              })
            });
        })
        .catch(err => {
          res.status(400).json({
            name: err.name,
            message: err.message
          })
        })
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  });

module.exports = { router };