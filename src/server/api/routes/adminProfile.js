const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const AdminProfile = require('../models/AdminProfile');

// @route POST /api/admin/create
// @desc Create admin profile for user with role admin
// @acess Private User with role admin
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'admin') {
    AdminProfile.findOne({ user: req.user._id })
      .then(profile => {
        if (profile) {
          return res.status(200).json({
            message: 'A profile exists for this user!'
          })
        }

        let { firstname, lastname } = req.body;
        const Admin = new AdminProfile({
          user: req.user._id,
          firstname,
          lastname
        });

        Admin.save().then((doc) => {
          res.status(201).json({
            body: doc
          });
        }).catch((err) => {
          res.header(400).json({
            name: err.name,
            message: err.message
          });
        });
      })
      .catch(err => {
        res.header(400).json({
          name: err.name,
          message: err.message
        })
      })
  } else {
    return res.status(403);
  }
})
// @route GET /api/admin
// @desc Get all Admins
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'admin') {
    AdminProfile.find()
      .populate('user')
      .then((profiles) => {
        if (profiles.length === 0) return res.status(404).json({ message: 'No profiles to display!' });

        res.json({
          body: profiles
        })
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message
        });
      });
  } else {
    return res.status(403);
  }
})
// @route GET api/Admin/id
// @desc Get Admin profile for users
// @access Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin') {
      const id = req.params.id;

      AdminProfile.findOne({ user: id })
        .populate('articles')
        .populate('jobs')
        .exec()
        .then((doc) => {
          if (!doc) return res.status(404).json({ message: 'No profile to display!' });

          res.json({
            body: doc
          })
        }).catch((err) => {
          res.status(400).json({
            name: err.name,
            message: err.message
          })
        })
    }
    else {
      return res.status(403);
    }
  })
  // @route PATCH api/Admin/id
  // @desc Update admin profile by id
  // @access Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin') {
      const id = req.params.id;

      AdminProfile.findOne({ user: id })
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'No profile to display!' });

          const { firstname, lastname } = profile;
          const { firstname: firstnameUpdate, lastname: lastnameUpdate } = req.body;

          AdminProfile.findOneAndUpdate({ user: id },
            {
              $set:
                {
                  firstname: firstnameUpdate || firstname,
                  lastname: lastnameUpdate || lastname
                }
            }, { new: false })
            .then((profile) => {
              if (!profile) return res.status(404).json({ message: 'No profile to display!' });

              res.json({
                body: profile
              })
            }).catch((err) => {
              res.status(400).json({
                error: err.message
              })
            })
        })
        .catch(err => {
          res.status(400).json({
            name: err.name,
            message: err.message
          })
        })
    }
    else {
      return res.status(403);
    }
  })
  // @route DELETE api/Admin/id
  // @desc Delete admin profile
  // @access Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin') {
      const id = req.params.id;

      AdminProfile.findOneAndRemove({ user: id })
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'Profile not found!' });

          res.status(202).json({
            message: 'Success'
          })
        }).catch((err) => {
          res.status(400).json({
            name: err.name,
            message: err.message
          })
        })
    }
    else {
      return res.status(403);
    }
  })

module.exports = { router }; 