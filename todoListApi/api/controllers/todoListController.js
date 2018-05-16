'use strict';

var mongoose = require('mongoose'),
  account = mongoose.model('Account'),
  validator = require("email-validator");

  exports.create_account = function(req, res){
    var obj = JSON.parse(JSON.stringify(req.body));    
    if (validator.validate(obj.email) === false){
        console.log(`create_account failure : ${obj.email} is not a valid email address`);  
        res.send("failure");  
        return;       
    }  

    var new_account = new account(req.body);
    new_account.save(function(err, result) {
      if (err){
        console.log("create_account failure : " + JSON.stringify(err));  
        res.send("failure");        
      }
      else{
        res.send(200);        
        console.log(`create_account ok : ${obj.email}, born on ${obj.birth}, created`);
      }         
    });
  };


  exports.login = function(req, res){
    var obj = JSON.parse(JSON.stringify(req.body));
    if (validator.validate(obj.email) === false){
      console.log(`login failure : ${obj.email} is not a valid email address`);  
      res.send(false);  
      return;       
    }  

    var user = account.find(
      {
        email : obj.email.toLowerCase().trim(),
        password : obj.password.trim()
      }).exec(function(err, result) {
        if (err) {
          console.log("login failure : " + JSON.stringify(err));  
          res.send(false);    
        } else {
            if (result.length === 0)
            {
              console.log(`login failure : ${obj.email} not found`);
              res.send(false);              
            }
            else{
              console.log(`login ok : ${obj.email} logged in`);
              res.send(true);
            }            
        }
    });
  };



