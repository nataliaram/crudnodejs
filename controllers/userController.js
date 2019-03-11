var mongoose = require('mongoose');
var User = require("../models/User");
 
var userController = {};
 
userController.list = function(req, res){
    
    User.find({}).exec(function(err, users){
        if( err ){ console.log('Error: ', err); return; }
        console.log(users);
        console.log("The INDEX");
        res.render('../views/user/index', {users: users} );
        
    });
    
};
 

userController.create = function(req, res){
    res.render('../views/user/create');
};
 
userController.save = function(req, res){
    var user = new User( req.body );
    
    user.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a user. :)");
        res.redirect("/users");
        
    });
};

userController.show = function(req, res){
    User.findOne({_id: req.params.id}).exec(function(err, user){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/user/show', {user: user} );
    });
    
};

userController.edit = function(req, res) {
  User.findOne({_id: req.params.id}).exec(function (err, user) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/user/edit", {user: user});
    
  });
};
 
userController.update = function(req, res){
    User.findByIdAndUpdate( req.params.id, {$set: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }}, { new: true },
    function( err, user){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/user/edit', {user: req.body} );
        }
        
        console.log( user );
        
        res.redirect('/users/show/' + user._id);
        
    });
};

userController.delete = function(req, res){
    
    User.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("User deleted!");
        res.redirect("/users");
    });
    
};

module.exports = userController;