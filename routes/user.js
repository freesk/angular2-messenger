var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

// Import a DB model
var User = require('../models/user');

router.post('/', function(req, res, next) {

  // Catch all possible errors
  try {
    if(!req.body.firstName) throw new Error("First name is not given");
    if(!req.body.lastName) throw new Error("Last name is not given");
    if(!req.body.password) throw new Error("Password is not given");
    if(!req.body.email) throw new Error("Email is not given");
  } catch (err) {
    return res.status(500).json({
      title: "Missing register data",
      err: err
    });
  }

  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // Crypt the password
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });

  user.save(function(err, doc) {
    // Status 500 - server error
    if(err) return res.status(500).json({
      // Set a json object to send back
      title: "An error occured",
      err: err
    });
    // Status 201 - new resourse created
    res.status(201).json({
      message: "User created",
      obj: doc
    });
  });
});

module.exports = router;
