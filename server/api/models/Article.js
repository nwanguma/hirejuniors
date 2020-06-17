const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'AdminProfile'
  },

  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    required: true,
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

const Article = model('Article', ArticleSchema, 'articles');

module.exports = Article;