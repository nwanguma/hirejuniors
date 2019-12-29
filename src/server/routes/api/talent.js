const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Developer = require('../../models/Developer');
const passport = require('passport');
const _ = require('lodash');

// @route GET route/api/talent
// @desc Return developers
// @acess Private
router.route('/')
  .post(passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = req.header('Authorization').slice(7);
    jwt.verify(token, secretOrKey, (err, decoded) => {
      if (!decoded) {
        res.status(400).send('An error occured');
      } else {
        const role = decoded.role;

        if (role === 'developer' || role === 'admin') {
          const developer = new Developer({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            password: req.body.password,
            email: req.body.email,
            education: req.body.education,
            location: req.body.location,
            experienceLength: req.body.experienceLength,
            isEmployed: req.body.isEmployed,
            about: req.body.about
          });
          developer.save().then((doc) => {
            res.json(doc);
          }).catch((err) => {
            res.header(400).send(err);
          });
        }
      }
    });
  })
  .get(passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Developer.find().then((docs) => {
        if (docs.length === 0) return res.status(404).json({ message: 'No developers found' });
        const developers = [];
        docs.forEach((doc) => {
          const developer = _.pick(doc, ['firstname', 'lastname', 'age',
            'sex', 'skills', 'bio', 'preferredSalary',
            'education', 'location', 'experienceLength', 'githubURL',
            'portfolioURL', 'linkedinURL']);
          developers.push(developer);
        });
        res.json(developer);
      })
    })

// @route GET api/posts/test
// @desc Test profile 
// @acess Public
router.route('/frontend')
  .get((req, res) => res.json({ frontendGet: 'frontendGet' }))
  .post((req, res) => res.json({ frontendPost: 'frontendPost' }))

module.exports = { router }; 