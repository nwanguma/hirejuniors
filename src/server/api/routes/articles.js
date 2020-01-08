const express = require('express');
const router = express.Router();
const _ = require('lodash');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { secretOrKey } = require('../../config/keys');
const Article = require('../models/Article');
const User = require('../models/User');

router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { role } = req.user;

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
      .then((doc) => {
        const article = _.pick(doc, ['title', 'body', 'author', 'tags']);

        User.findByIdAndUpdate(req.user._id, { $push: { articles: doc._id } }, { new: false })
          .then((user) => console.log(user))
          .catch((err) => console.log(error));

        res.status(201).json(article);
      }).catch((err) => {
        console.log(err);
        res.status(400).send({
          error: 'An error occured!',
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
    .populate('author')
    .exec()
    .then((docs) => {
      if (docs.length === 0) return res.status(404).json({ error: 'No articles found' });

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
        message: 'An error occured!',
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
      .populate('author')
      .exec()
      .then((doc) => {
        if (!doc) return res.status(404).json({ error: 'Article not found' });

        const article = _.pick(doc, ['title', 'body', 'author', 'tags']);

        res.json({
          body: article
        });
      }).catch((err) => {
        res.status(400).json({ error: 'An error occured' });
      });
  })

  //@Route GET api/articles/:id
  //@desc Delete specific article
  //@access Private Admin
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === "admin") {
      const id = req.params.id;
      Article.findByIdAndRemove(id).then((doc) => {
        if (!doc) return res.status(404).json({ error: 'Article not found' });

        const article = _.pick(doc, ['title', 'body', 'author', 'tags']);

        res.json({
          body: article
        });
      }).catch((err) => {
        res.status(400).send({ error: 'An error occured' });
      })
    } else {
      res.status(401).json({ error: 'Unauthorized user' });
    }
  })

  //@Route PATCH api/articles/:id
  //@desc  Edit specific article
  //@access Private Admin
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const role = req.user.role;

    if (role === "admin") {
      const { title, body, author, tags } = req.body;
      const id = req.params.id;

      Article.findById(id).then((doc) => {
        if (!doc) return res.status(404).json({ error: "Article not found" })

        Article.findByIdAndUpdate(id,
          {
            $set: {
              title: title || doc.title,
              body: body || doc.body,
              author: author || doc.author,
              tags: tags || doc.tags
            }
          }, { new: false }).then((doc) => {
            const article = _.pick(doc, ['title', 'body', 'author', 'tags']);
            if (!doc) return res.status(404).json({ error: 'Article not found' });
            res.send(article);
          }).catch((err) => {
            res.status(400).send({ error: 'An error occured' });
          })
      })
    } else {
      res.status(401).json({ error: 'Unauthorized user' });
    }
  });

module.exports = { router };