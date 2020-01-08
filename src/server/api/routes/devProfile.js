const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const DeveloperProfile = require('../models/DeveloperProfile');
const RecruiterProfile = require('../models/RecruiterProfile');
const AdminProfile = require('../models/AdminProfile');

// @route GET route/api/developers/create
// @desc Return developers
// @acess Private Admin and Developer
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;
  let { firstname, lastname, age, sex, skills, bio, experience,
    education, location, experienceLength, githubURL, isEmployed, about
  } = req.body;

  skills = skills.split(',');

  if (role === 'developer' || role === 'admin') {
    const developer = new DeveloperProfile({
      user: req.user._id,
      firstname,
      lastname,
      age,
      sex,
      skills,
      bio,
      experience,
      education,
      location,
      experienceLength,
      githubURL,
      isEmployed,
      about
    });
    developer.save().then((doc) => {
      const developer = _.pick(doc, ['firstname', 'lastname', 'age', 'email',
        'education', 'location', 'experienceLength', 'isEmployed', 'about'])
      res.json({
        body: doc
      });
    }).catch((err) => {
      console.log(err)
      res.header(400).send(err);
    });
  } else {
    return res.status(401).json({ error: 'Unauthorized user!' });
  }
})
// @route GET route/api/developer
// @desc Return developers
// @acess Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  DeveloperProfile.findOne({ user: req.user._id })
    .populate('user')
    .then((profile) => {
      res.json(profile)
    })
    .catch((err) => console.log(err))
})

// @route GET route/api/developer/id
// @desc Return specific developer
// @acess Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    DeveloperProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: developerProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })
  // @route GET route/api/developer/id
  // @desc Return specific developer
  // @acess Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    DeveloperProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: developerProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })
  // @route GET route/api/developer/id
  // @desc Return specific developer
  // @acess Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    DeveloperProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: developerProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })

module.exports = { router }; 