var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sub', function(req, res, next) {
  res.render('sub') 
}); 

module.exports = router;
