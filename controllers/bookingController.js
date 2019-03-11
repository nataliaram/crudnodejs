var mongoose = require('mongoose');
var Booking = require("../models/Booking");

var bookingController = {};

bookingController.save = function(req, res){
    var booking = new Booking( req.body );

    booking.save(function(err){
        if( err ){
          console.log('Error: ', err);
          res.send({ status: false });
          return;
        }

        console.log("Successfully created a Booking.");
        res.send({ status: true });
    });
};


module.exports = bookingController;
