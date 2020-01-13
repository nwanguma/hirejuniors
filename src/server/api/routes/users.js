const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');

const { secretOrKey } = require('../../config/keys');
const User = require('../models/User');

const router = express.Router();

// @route POST api/users/register
// @desc Register users
// @access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) return res.status(409).json({ message: 'Email already registered!' });

    const { email, password, username, role } = req.body;

    User.findOne({ username })
      .then(user => {
        if (user) return res.status(409).json({ message: 'Username taken!' });

        const newUser = {
          email,
          password,
          username,
          role
        };

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;

            const user = new User(newUser);

            user.save().then(user => {
              const payload = { username: user.username };

              jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
                if (err) new Error('Failed to generate token' + err);

                res.status(201).header('Authorization', `Bearer ${token}`).json({
                  body: user
                });
              });
            }).catch(err => {
              res.status(400).json({
                message: err.message,
                code: err.code
              });
            })
          });
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
          code: err.code
        });
      })
  }).catch((err) => {
    res.status(400).json({
      message: err.message,
      code: err.code
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
    if (!user) return res.status(404).json({ message: 'User does not exist' });

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(401).json({ message: 'Password incorrect' });

      const payload = { username: user.username };

      jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
        if (err) new Error('Failed to generate token' + err);

        res.header('Authorization', `Bearer ${token}`).json({
          success: true,
          body: user
        });
      });
    });
  }).catch((err) => {
    res.status(400).json({ message: err.message });
  });
});

// @route POST api/users/current
// @desc Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const id = req.user._id;

  User.findById(id)
    .then((user) => {
      if (!user) return res.status(404).json({ message: 'User does not exist!' });

      res.json({
        body: user
      })
    })
    .catch((err) => res.json({
      message: err.message
    }))
});

module.exports = { router };