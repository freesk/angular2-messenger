var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

// Import a DB model
var User = require('../models/user');

router.post('/', function(req, res, next) {
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
