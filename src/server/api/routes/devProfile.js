const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const DeveloperProfile = require('../models/DeveloperProfile');
const AdminProfile = require('../models/AdminProfile');

// @route GET route/api/developers/create
// @desc create developer profile
// @acess Private Admin and Developer
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'developer' || role === 'admin') {
    DeveloperProfile.findOne({ user: req.user._id })
      .then(profile => {
        if (profile) {
          return res.status(200).json({
            message: 'A profile exists for this user!'
          })
        }

        let { firstname, lastname, age, sex, skills, bio, experience,
          education, location, experienceLength, githubURL, isEmployed, about
        } = req.body;

        skills = skills.split(',');

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
          res.header(400).json({
            name: err.name,
            message: err.message
          })
        });
      })
      .catch(err => {
        res.header(400).json({
          name: err.name,
          message: err.message
        })
      })
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
})
// @route GET route/api/developer
// @desc Get developers
// @acess Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const role = req.user.role;

  if (role === 'admin' || role === "developer") {
    DeveloperProfile.findOne({ user: req.user._id })
      .populate('user')
      .then((profile) => {
        res.json(profile)
      })
      .catch((err) => err)
  }
  else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
})

// @route GET route/api/developer/id
// @desc Get specific developer
// @acess Private
router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'developer') {
      const id = req.params.id;

      DeveloperProfile.findById(id)
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'No profile to display' });

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
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  })
  // @route PATCH route/api/developer/id
  // @desc Edit developer profile
  // @acess Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'developer') {
      const id = req.params.id;

      DeveloperProfile.findById(id)
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'No profile to display' });

          const { firstname, lastname, age, sex, skills, bio,
            experience, education, location, experienceLength, githubURL,
            isEmployed, about } = profile;

          const { firstname: firstnameUpdate, lastname: lastnameUpdate, age: ageUpdate, sex: sexUpdate,
            skills: skillsUpdate, bio: bioUpdate, experience: experienceUpdate,
            education: educationUpdate, location: locationUpdate,
            experienceLength: experienceLengthUpdate, githubURL: githubURLUpdate,
            isEmployed: isEmployedUpdate, about: aboutUpdate } = req.body;

          DeveloperProfile.findOneAndUpdate(id, {
            $set: {
              firstname: firstnameUpdate || firstname,
              lastname: lastnameUpdate || lastname,
              age: ageUpdate || age,
              sex: sexUpdate || sex,
              skills: skillsUpdate || skills,
              bio: bioUpdate || bio,
              experience: experienceUpdate || experience,
              education: educationUpdate || education,
              location: locationUpdate || location,
              experienceLength: experienceLength || experienceLength,
              githubURL: githubURLUpdate || githubURL,
              isEmployed: isEmployedUpdate || isEmployed,
              about: aboutUpdate || about
            }
          }, { new: true })
            .then(profile => {
              if (!profile) return res.status(404).json({ message: 'No profile to display' });

              res.json({ body: profile })
            })
            .catch(err => {
              res.status(400).json({
                name: err.name,
                message: err.message
              })
            })
        }).catch((err) => {
          res.status(400).json({
            name: err.name,
            message: err.message
          })
        })
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  })
  // @route DELETE route/api/developer/id
  // @desc Delete developer profile
  // @acess Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'developer') {
      const id = req.params.id;

      DeveloperProfile.findByIdAndRemove(id)
        .then((profile) => {
          if (!profile) return res.status(404).json({ message: 'Profile not found!' })

          res.json({
            message: 'Success',
            body: profile
          })
        }).catch((err) => {
          res.status(400).json({
            message: err.message,
          })
        })
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  })

module.exports = { router }; 