var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Visual Studio Code!' });
});

/* GET Quick Start. */
router.get('/quickstart', function(req, res, next) {
  res.render('quickstart');
});

module.exports = router;
