const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const RecruiterProfile = require('../models/RecruiterProfile');

// @route POST recruiters/create
// @desc Create recruiter profile
// @acess Private Admin and Recruiter
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'recruiter' || role === 'admin') {
    RecruiterProfile.findOne({ user: req.user._id })
      .then(profile => {
        if (profile) {
          return res.status(200).json({
            message: 'A profile exists for this user!'
          })
        }

        let { firstname, lastname, company, position, jobs } = req.body;

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
          res.status(400).json({
            name: err.name,
            message: err.message
          });
        });
      })
      .catch(err => {
        res.status(400).json({
          name: err.name,
          message: err.message
        });
      })
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
})
// @route GET api/recruiter
// @desc Get Recruiters
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  RecruiterProfile.findOne({ user: req.user._id })
    .populate('user')
    .populate('jobs')
    .then((profiles) => {
      if (profiles.length === 0) return res.status(404).json({ message: 'No Recruiters to display' });

      res.json({
        body: profiles
      })
    })
    .catch((err) => {
      res.status(400).json({
        name: err.name,
        message: err.message
      })
    })
})

// @route GET route/api/Recruiter/id
// @desc Return specific Recruiter
// @acess Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    RecruiterProfile.findById(id)
      .populate('jobs')
      .exec()
      .then((profile) => {
        if (!profile) return res.status(404).json({ message: 'No profile to display!' });

        res.json({
          body: profile
        })
      }).catch((err) => {
        res.status(400).json({
          name: err.name,
          message: err.message
        })
      })
  })
  // @route PATCH api/Recruiter/id
  // @desc Update Recruiter profile
  // @access Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'recruiter') {
      const id = req.params.id;

      RecruiterProfile.findById(id)
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'Profile not found' });

          const { firstname, lastname, company, position } = req.body;
          const { firstname: firstnameUpdate, lastname: lastnameUpdate, company: companyUpdate,
            position: positionUpdate } = profile;

          RecruiterProfile.findByIdAndUpdate(id, {
            $set: {
              firstname: firstnameUpdate || firstname,
              lastname: lastnameUpdate || lastname,
              company: companyUpdate || company,
              position: positionUpdate || position
            }
          }, { new: true })
            .then(profile => {
              if (!profile) return res.status(404).json({ message: 'Profile not found!' });

              res.json({
                body: profile
              })
            })
            .catch(err => {
              res.status(400).json({
                name: err.name,
                message: err.message
              });
            });
        }).catch((err) => {
          res.status(400).json({
            success: false,
            error: err
          });
        })
    } else {
      res.status(401).json({ message: 'Unauthorized user!' });
    }
  })
  // @route DELETE api/Recruiter/id
  // @desc Delete Recruiter profile
  // @access Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;
    const id = req.params.id;

    if (role === 'admin') {
      RecruiterProfile.findByIdAndRemove(id)
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'Profile not found!' });

          res.json({
            body: profile
          })
        }).catch((err) => {
          res.status(400).json({
            name: err.name,
            message: err.message
          })
        })
    } else {
      return res.status(401).json({ message: 'User not authorized!' });
    }
  })

module.exports = { router }; 