const express = require('express');
const router = express.Router();
const _ = require('lodash');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { secretOrKey } = require('../../config/keys');
const Article = require('../models/Article');
const User = require('../models/User');
const AdminProfile = require('../models/AdminProfile');

router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { role } = req.user.role;

  if (role === 'admin') {
    const { title, body, author, tags } = req.body;
    const article = new Article({
      author: req.user._id,
      title,
      body,
      tags,
    });

    article
      .save()
      .then((article) => {
        AdminProfile.findOneAndUpdate({ user: req.user._id },
          { $push: { articles: doc._id } },
          { new: true })
          .then((user) => user)
          .catch((err) => err);

        res.status(201).json(article);
      }).catch((err) => {
        res.status(400).send({
          name: err.name,
          message: err.message
        });
      });
  } else {
    res.status(401).json({ error: 'Unauthorized user' });
  }
})
//@Route GET api/articles
//@desc Get all articles
//@access Public
router.get('/', (req, res) => {
  Article.find()
    .populate('author', ['firstname', 'lastname'])
    .exec()
    .then((docs) => {
      if (docs.length === 0) return res.status(404).json({ message: 'No articles found!' });

      const articles = [];

      docs.forEach((doc) => {
        const article = _.pick(doc, ['title', 'body', 'author', 'tags']);
        articles.push(article)
      });
      res.json({
        body: articles
      });
    }).catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
});

router.route('/:id')

  //@Route GET api/articles/:id
  //@desc  Get specific articles by id
  //@access Public
  .get((req, res) => {
    const id = req.params.id;
    Article
      .findById(id)
      .populate('author', ['firstname', 'lastname'])
      .exec()
      .then((doc) => {
        if (!doc) return res.status(404).json({ message: 'Article not found' });

        const article = _.pick(doc, ['title', 'body', 'author', 'tags']);

        res.json({
          body: article
        });
      }).catch((err) => {
        res.status(400).json({ name: err.name, message: err.message });
      });
  })

  //@Route GET api/articles/:id
  //@desc Delete specific article
  //@access Private Admin
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === 'admin') {
      const id = req.params.id;
      Article.findByIdAndRemove(id).then((doc) => {
        if (!doc) return res.status(404).json({ message: 'Article not found' });

        AdminProfile.findOneAndUpdate({ user: req.user._id },
          { $pull: { articles: doc._id } },
          { new: true })
          .then((user) => user)
          .catch(err => err)

        const article = _.pick(doc, ['title', 'body', 'author', 'tags']);

        res.json({
          body: article
        });
      }).catch((err) => {
        res.status(400).json({ name: err.name, message: err.message });
      })
    } else {
      res.status(401).json({ name: err.name, message: err.message });
    }
  })

  //@Route PATCH api/articles/:id
  //@desc  Edit specific article
  //@access Private Admin
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === "admin") {
      const id = req.params.id;

      Article.findById(id).then((doc) => {
        const { title: titleUpdate, body: bodyUpdate, author: authorUpdate, tags: tagsUpdate } = req.body;
        const { title, body, author, tags } = doc;

        if (!doc) return res.status(404).json({ message: "Article not found!" })

        Article.findByIdAndUpdate(id,
          {
            $set: {
              title: titleUpdate || title,
              body: bodyUpdate || body,
              author: authorUpdate || author,
              tags: tagsUpdate || tags
            }
          }, { new: false }).then((doc) => {
            const article = _.pick(doc, ['title', 'body', 'author', 'tags']);
            if (!doc) return res.status(404).json({ message: 'Article not found!' });
            res.send(article);
          }).catch((err) => {
            res.status(400).json({ message: err.message });
          })
      })
    } else {
      res.status(401).json({ message: 'Unauthorized user' });
    }
  });

module.exports = { router };