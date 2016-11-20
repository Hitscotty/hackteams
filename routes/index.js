var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'AWS Demo', bdy: 'body' });
});

module.exports = router;
