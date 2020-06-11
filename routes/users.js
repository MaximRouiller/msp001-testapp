var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/string', function(req, res, next) {
  
  //todo: implement awesome application
  
  res.send('Maxime Rouiller, Professional Racoon Extraordinaire');

});
router.get('/json', function(req, res, next) {
  
  //todo: implement awesome application
  
  res.send({firstname: 'Maxime', lastname: 'Rouiller', job: 'Professional Racoon Extraordinaire'});

});

module.exports = router;
