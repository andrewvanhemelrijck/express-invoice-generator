var express = require('express');
var router = express.Router();
var data = require('../controllers/invoice-controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {invoice: data});
});

module.exports = router;
