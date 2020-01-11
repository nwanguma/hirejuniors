const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const AdminProfile = require('../models/AdminProfile');

// @route POST /api/admin/create
// @desc Create admin profile for user
// @acess Private User with role admin
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'admin') {
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
      res.header(400).send({
        message: err.message
      });
    });
  } else {
    return res.status(403);
  }
})
// @route GET /api/admin
// @desc Return Admin profile
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  AdminProfile.find()
    .populate('user')
    .then((profile) => res.json(profile))
    .catch((err) => console.log(err))
})

// @route GET route/api/Admin/id
// @desc Return specific Admin
// @acess Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    AdminProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: AdminProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })
  // @route GET route/api/Admin/id
  // @desc Return specific Admin
  // @acess Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    AdminProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: AdminProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })
  // @route GET route/api/Admin/id
  // @desc Return specific Admin
  // @acess Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {

    const id = req.params.id;

    AdminProfile.findById(id)
      .then((doc) => {
        if (!doc) new Error(err);

        res.json({
          message: 'Success',
          body: AdminProfile
        })
      }).catch((err) => {
        res.status(400).json({
          success: false,
          error: err
        })
      })
  })

module.exports = { router }; 