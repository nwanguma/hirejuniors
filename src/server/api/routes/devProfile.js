const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const DeveloperProfile = require('../models/DeveloperProfile');
const AdminProfile = require('../models/AdminProfile');

const validateDeveloperProfileInput = require('../../validation/developerProfile');

// @route GET route/api/developers/create
// @desc create developer profile
// @acess Private Admin and Developer
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('this ran at least once please for the love of god')
  const role = req.user.role;

  if (role === 'developer' || role === 'admin') {
    const { errors, isValid } = validateDeveloperProfileInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    DeveloperProfile.findOne({ user: req.user._id })
      .then(profile => {
        if (profile) {
          return res.status(200).json({
            error: {
              message: 'A profile exists for this user!'
            }
          })
        }

        let { firstname, lastname, age, sex, skills, bio, experience,
          education, location, experienceLength, githubURL, website, linkedinURL, twitterURL
        } = req.body;

        let { company, title, isCurrent, description } = req.body.experience;
        let { institution, degree } = req.body.education;

        skills = skills.split(',');

        const developer = new DeveloperProfile({
          user: req.user._id,
          firstname,
          lastname,
          age,
          sex,
          skills,
          bio,
          experience: {
            company,
            title,
            isCurrent,
            location,
            description,
          },
          education: {
            institution,
            degree
          },
          location,
          experienceLength,
          githubURL,
          website,
          linkedinURL,
          twitterURL
        });
        developer.save().then((doc) => {
          // const developer = _.pick(doc, ['firstname', 'lastname', 'age', 'email',
          //   'education', 'location', 'experienceLength', 'isEmployed', 'about'])
          res.json({
            body: doc
          });
        }).catch((err) => {
          res.header(400).json({
            error: {
              name: err.name,
              message: err.message
            }
          })
        });
      })
      .catch(err => {
        res.header(400).json({
          error: {
            name: err.name,
            message: err.message
          }
        })
      })
  } else {
    return res.status(401).json({
      error: {
        message: 'Unauthorized user!'
      }
    });
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
      .catch((err) => {
        res.status(400).json({
          error: {
            name: err.name,
            message: err.message
          }
        })
      })
  }
  else {
    return res.status(401).json({
      error: {
        message: 'Unauthorized user!'
      }
    });
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

      DeveloperProfile.findOne({ user: id })
        .then((profile) => {
          if (!profile) return res.status(404).json({
            error: {
              message: 'No profile to display'
            }
          });

          console.log(profile.user._id)

          res.json({
            body: profile
          })
        }).catch((err) => {
          res.status(400).json({
            error: {
              name: err.name,
              message: err.message
            }
          })
        })
    } else {
      return res.status(401).json({
        error: {
          message: 'Unauthorized user!'
        }
      });
    }
  })
  // @route PATCH route/api/developer/id
  // @desc Edit developer profile
  // @acess Private
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.params.id;
    const role = req.user.role;

    if (role === 'admin' || role === 'developer') {
      const { errors, isValid } = validateDeveloperProfileInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      DeveloperProfile.findOne({ user: id })
        .then((profile) => {
          if (!profile) return res.status(404).json({
            error: {
              message: 'No profile to display'
            }
          });

          const { firstname, lastname, age, sex, skills, bio, experience,
            education, location, experienceLength, githubURL, website, linkedinURL, twitterURL
          } = req.body;

          const { company, title, isCurrent, description } = req.body.experience;
          const { institution, degree } = req.body.education;

          const { firstname: firstnameUpdate, lastname: lastnameUpdate, age: ageUpdate, sex: sexUpdate,
            skills: skillsUpdate, bio: bioUpdate, experience: experienceUpdate,
            education: educationUpdate, location: locationUpdate,
            experienceLength: experienceLengthUpdate, githubURL: githubURLUpdate,
            website: websiteUpdate, linkedinURL: linkedinURLUpdate, twitterURL: twitterURLUpdate } = req.body;

          const { company: companyUpdate, title: titleUpdate, isCurrent: isCurrentUpdate, description: descriptionUpdate } = req.body.education;
          const { institution: institutionUpdate, degree: degreeUpdate } = req.body.education;

          DeveloperProfile.findOneAndUpdate({ user: id }, {
            $set: {
              firstname: firstnameUpdate || firstname,
              lastname: lastnameUpdate || lastname,
              age: ageUpdate || age,
              sex: sexUpdate || sex,
              skills: skillsUpdate || skills,
              bio: bioUpdate || bio,
              experience: {
                company: companyUpdate || company,
                title: titleUpdate || title,
                isCurrent: isCurrentUpdate || isCurrent,
                description: descriptionUpdate || description
              },
              education: {
                institution: institutionUpdate || institution,
                degree: degreeUpdate || degree
              },
              location: locationUpdate || location,
              experienceLength: experienceLength || experienceLength,
              githubURL: githubURLUpdate || githubURL,
              website: websiteUpdate || website,
              linkedinURL: linkedinURLUpdate || linkedinURL,
              twitterURL: twitterURLUpdate || twitterURL
            }
          }, { new: true })
            .then(profile => {
              if (!profile) return res.status(404).json({
                error: {
                  message: 'No profile to display'
                }
              });

              res.json({ body: profile })
            })
            .catch(err => {
              res.status(400).json({
                error: {
                  name: err.name,
                  message: err.message
                }
              })
            })
        }).catch((err) => {
          res.status(400).json({
            error: {
              name: err.name,
              message: err.message
            }
          })
        })
    } else {
      return res.status(401).json({
        error: {
          message: 'Unauthorized user!'
        }
      });
    }
  })
  // @route DELETE route/api/developer/id
  // @desc Delete developer profile
  // @acess Private
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin' || role === 'developer') {
      const id = req.params.id;

      DeveloperProfile.findOneAndRemove({ user: id })
        .then((profile) => {
          if (!profile) return res.status(404).json({
            error: {
              message: 'Profile not found!'
            }
          })

          res.json({
            message: 'Success',
            body: profile
          })
        }).catch((err) => {
          res.status(400).json({
            error: {
              message: err.message,
              name: err.name
            }
          })
        })
    } else {
      return res.status(401).json({
        error: {
          message: 'Unauthorized user!'
        }
      });
    }
  })

module.exports = { router }; 