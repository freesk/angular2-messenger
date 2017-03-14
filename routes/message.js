var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next) {
  // Get all records
  Message.find()
         .exec(function(err, docs) {
           if(err) return res.status(500).json({
             // Set a json object to send back
             title: "An error occured",
             err: err
           });
           // Good to go
           res.status(200).json({
             message: "Success",
             obj: docs
           });
         });
});

router.post('/', function(req, res, next) {
  var message = new Message({
    // Expect content property in the post request
    content: req.body.content
  });
  message.save(function(err, doc) {
    // Status 500 - server error
    if(err) return res.status(500).json({
      // Set a json object to send back
      title: "An error occured",
      err: err
    });
    // Status 201 - new resourse created
    res.status(201).json({
      message: "Saved message",
      obj: doc
    });
  });
});

module.exports = router;
