const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');

const { secretOrKey } = require('../../config/keys');
const User = require('../models/User');

const router = express.Router();

// @route POST api/users/register
// @desc Register new user
// @access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) return res.status(400).json({ error: 'User already exists' });

    const newUser = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      role: req.body.role
    };

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) new Error('error' + err);

        newUser.password = hash;

        const user = new User(newUser);

        user.save().then(user => {
          const payload = { username: user.username, role: user.role };
          const displayedUser = _.pick(user, ['email', 'username', 'role', 'date']);

          jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
            if (err) new Error('Failed to generate token' + err);

            res.header('Authorization', `Bearer ${token}`).json({
              success: true,
              user: displayedUser
            });
          });
        }).catch(err => {
          res.status(400).json({
            success: false,
            error: err
          });
        })
      });
    });
  });
});

// @route POST api/users/login
// @desc Login user
// @access Public
router.post('/login', (req, res) => {
  const { email, username, password } = req.body;

  let loginCredentials;

  if (email) {
    loginCredentials = {
      email: email
    }
  } else if (username) {
    loginCredentials = {
      username: username
    }
  }

  User.findOne(loginCredentials).then(user => {
    if (!user) return res.status(404).json({ email: 'User does not exist' });

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ password: 'Password incorrect' });

      const payload = { username: user.username, role: user.role };

      jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
        if (err) new Error('Failed to generate token' + err);

        res.header('Authorization', `Bearer ${token}`).json({
          success: true
        });
      });
    });
  });
});

// @route POST api/users/current
// @desc Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const id = req.user._id;

  User.findById(id)
    .populate('articles')
    .exec()
    .then((user) => res.json(user))
    .catch((err) => console.log(user))
});

module.exports = { router };