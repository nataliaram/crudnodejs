var express = require('express');
var router = express.Router();

var booking = require('../controllers/bookingController.js');

router.post('/save', booking.save);

module.exports = router;
