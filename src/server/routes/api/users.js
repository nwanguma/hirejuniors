const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');

const { secretOrKey } = require('../../config/keys');
const User = require('../../models/Users');

const router = express.Router();

// @route POST api/users/register
// @desc Register new user
// @acess Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) return res.status(400).json({ error: 'User already exists' });

    const newUser = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {

        if (err) console.log('error', err);

        newUser.password = hash;

        const user = new User(newUser);

        user.save().then(user => {
          res.json(user)
        });
      });
    });
  });
});

// @route POST api/users/login
// @desc Login user
// @acess Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) return res.status(404).json({ email: 'User does not exist' });

    bcrypt.compare(password, user.password).then(isMatch => {

      if (!isMatch) return res.status(400).json({ password: 'Password incorrect' });

      const payload = { _id: user._id, role: user.role };

      jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {

        if (err) new Error('Failed to generate token');

        res.header('Authorization', `Bearer ${token}`).json({
          success: true
        });
      });
    });
  });
});

// @route POST api/users/current
// @desc Return current user
// @acess Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = _.pick(req.user, ['email']);
  res.json(user);
});

module.exports = { router };