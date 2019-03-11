var express = require('express');
var router = express.Router();

var item = require('../controllers/itemController.js');

router.post('/save', item.save);

module.exports = router;
