const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// @desc Test profile 
// @acess Public
router.route('/frontend')
  .get((req, res) => res.json({ frontendGet: 'frontendGet' }))
  .post((req, res) => res.json({ frontendPost: 'frontendPost' }))


// @route GET api/posts/test
// @desc Test profile 
// @acess Public
router.route('/frontend')
  .get((req, res) => res.json({ frontendGet: 'frontendGet' }))
  .post((req, res) => res.json({ frontendPost: 'frontendPost' }))


module.exports = { router };