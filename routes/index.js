var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/loading');
});

router.get('/home', function(req, res, next) {
  res.render('home/index');
}); 

router.get('/about', function(req, res, next) {
  res.render('home/about');
});

router.get('/experience', function(req, res, next) {
  res.render('home/experience');
});

router.get('/contact', function(req, res, next) {
  res.render('home/contact');
});

router.get('/update', function(req, res, next) {
  res.render('home/update');
});

module.exports = router;