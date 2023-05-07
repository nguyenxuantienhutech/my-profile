var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('home/about', { path: '/about' });
});

router.get('/experience', function(req, res, next) {
  res.render('home/experience');
});

router.get('/contact', function(req, res, next) {
  res.render('home/contact');
});

module.exports = router;