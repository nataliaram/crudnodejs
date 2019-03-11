var express = require('express');
var router = express.Router();

var index = require('../controllers/indexController.js');

router.get('/', index.home);

module.exports = router;
