const express = require('express');
const router = express.Router();
const Article = require('../../models/Articles');

router.route('/')
  .get((req, res) => {
    Job.find().then((docs) => {
      res.json(docs)
    })
  })
  .post((req, res) => {
    const job = new Job(req.body);
    job.save()
      .then((doc) => {
        res.send('You have added a new job')
      }).catch((err) => {
        res.status(400).send('An error occured!')
      })
  });

router.route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    Job.findById(id).then((doc) => {
      if (!doc) {
        throw new Error;
      }
      res.json(doc)
    }).catch((err) => {
      res.status(404).send('User does not exist')
    })
  })
  .delete((req, res) => {
    const id = req.params.id;
    Job.findByIdAndRemove(id).then((doc) => {
      res.send(doc);
    }).catch((err) => {
      res.status(400).send('An error occured')
    })
  })
  .patch((req, res) => {
    const id = req.params.id;
    Job.findByIdAndUpdate().then((doc) => {
      res.send(doc);
    }).catch((err) => {
      res.status(400).send('An error occured')
    })
  });

module.exports = { router };