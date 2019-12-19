const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../../models/Users');

// @route POST api/users/register
// @desc Register new user
// @acess Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' })
    }
    const newUser = {
      email: req.body.email,
      password: req.body.password
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        newUser.password = hash;
        const user = new User(newUser);
        user.save().then((user) => {
          res.json(user);
        }).catch((err) => {
          res.status(400).send('An error occured');
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
      if (!isMatch) res.status(400).json({ password: 'Password incorrect' });
      res.json({ msg: 'Success' })
    })
  });
});

module.exports = { router };