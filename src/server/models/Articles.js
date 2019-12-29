const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  tags: {
    type: String,
    required: true
  },

  date: {
    type: Number,
    required: true,
    default: Date.now()
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;