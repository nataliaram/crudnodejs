var mongoose = require('mongoose');
var Item = require("../models/Item");

var itemController = {};

itemController.save = function(req, res){
    var item = new Item( req.body );

    item.save(function(err){
        if( err ){
          console.log('Error: ', err);
          res.send({ status: false });
          return;
        }

        console.log("Successfully created a Item.");
        res.send({ status: true });
    });
};


module.exports = itemController;
