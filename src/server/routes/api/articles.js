const express = require('express');
const router = express.Router();
const _ = require('lodash');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../../config/keys');
const Article = require('../../models/Articles');

router.route('/')
  //@Route POST api/articles
  //@Desc Create article
  //@Access Private Adnin
  .post(passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = req.header('Authorization').slice(7);
    jwt.verify(token, secretOrKey, (err, decoded) => {

      if (!decoded) {
        res.status(401);
      } else {
        const role = decoded.role;

        if (role === 'admin') {
          const article = new Article({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author,
            tags: req.body.tags,
          });

          article.save()
            .then((doc) => {
              if (!doc) return res.status(400).json({ message: 'Failed to save article!' });

              const article = _.pick(doc, ['title', 'body', 'author', 'tags']);
              res.json(article);
            }).catch((err) => {
              res.status(400).send({ message: 'An error occured!' });
            });
        } else {
          res.status(401).json({ error: 'User has different privileges' });
        }
      }
    });
  })
  //@Route GET api/articles
  //@desc Get all articles
  //@access Public
  .get((req, res) => {
    Article.find().then((docs) => {
      res.json(docs)
    });
  });

router.route('/:id')
  //@Route GET api/articles/:id
  //@desc  Get specific articles by id
  //@access Public
  .get((req, res) => {
    const id = req.params.id;
    Article.findById(id).then((doc) => {
      if (!doc) {
        throw new Error;
      }
      res.json(doc)
    }).catch((err) => {
      res.status(404).send('User does not exist')
    })
  })
  //@Route GET api/articles/:id
  //@desc Delete specific article
  //@access Private Admin
  .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = req.header('Authorization').slice(7);

    jwt.verify(token, secretOrKey, (err, decoded) => {
      if (!decoded) {
        res.status(401);
      } else {
        const id = req.params.id;
        Article.findByIdAndRemove(id).then((doc) => {
          doc ? res.json(doc) : res.status(404).send('Article not found');
        }).catch((err) => {
          res.status(400).send('An error occured')
        })
      }
    })
  })
  //@Route PATCH api/articles/:id
  //@desc  Edit specific article
  //@access Private Admin
  .patch(passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = req.header('Authorization').slice(7);

    jwt.verify(token, secretOrKey, (err, decoded) => {
      if (!decoded) {
        res.status(401);
      } else {
        const { title, body, author, tags } = req.body;

        const id = req.params.id;

        Article.findById(id).then((doc) => {

          if (doc) {
            Article.findByIdAndUpdate(id,
              {
                $set: {
                  title: title || doc.title,
                  body: body || doc.body,
                  author: author || doc.author,
                  tags: tags || doc.tags
                }
              }).then((doc) => {
                doc ? res.send(doc) : res.status(404).send('Article not fond');
              }).catch((err) => {
                res.status(400).send('An error occured');
              })
          } else {
            res.status(404).send('Article not found');
          }
        })
      }
    })
  });

module.exports = { router };