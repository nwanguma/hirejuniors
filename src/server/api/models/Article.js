const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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