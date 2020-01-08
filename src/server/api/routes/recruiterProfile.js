const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const RecruiterProfile = require('../models/RecruiterProfile');

// @route GET route/api/Recruiters/create
// @desc Return Recruiters
// @acess Private Admin and Recruiter
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;
  let { firstname, lastname, company, position, jobs } = req.body;

  if (role === 'recruiter' || role === 'admin') {
    const recruiter = new RecruiterProfile({
      user: req.user._id,
      firstname,
      lastname,
      company,
      position,
      jobs
    });
    recruiter.save().then((doc) => {
      const recruiter = _.pick(doc, ['firstname', 'lastname', 'company', 'position', 'jobs', 'user'])
      res.json({
        body: recruiter
      });
    }).catch((err) => {
      res.header(400).send(err);
    });
  } else {
    return res.status(401).json({ error: 'Unauthorized user!' });
  }
})
// @route GET route/api/Recruiter
// @desc Return Recruiters
// @acess Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  RecruiterProfile.findOne({ user: req.user._id })
    .populate('user')
    .then((profile) => res.json(profile))
    .catch((err) => console.log(err))
})

// @route GET route/api/Recruiter/id
// @desc Return specific Recruiter
// @acess Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    RecruiterProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: RecruiterProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })
  // @route GET route/api/Recruiter/id
  // @desc Return specific Recruiter
  // @acess Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    RecruiterProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: RecruiterProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })
  // @route GET route/api/Recruiter/id
  // @desc Return specific Recruiter
  // @acess Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    RecruiterProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: RecruiterProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })

module.exports = { router }; 