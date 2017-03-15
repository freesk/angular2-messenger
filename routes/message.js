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
      message: "Message saved",
      obj: doc
    });
  });
});

router.patch('/:id', function(req, res, next) {
  // Find by ID
  Message.findById(req.params.id, function(err, doc) {
    if(err) return res.status(500).json({
      // Set a json object to send back
      title: "An error occured",
      err: err
    });
    if(!doc) return res.status(500).json({
      // Set a json object to send back
      title: "No messaage found",
      err: new Error("No messaage found")
    });
    // Update the message's DB representation object
    // Where does "content" come from?
    doc.content = req.body.content;
    // Save
    doc.save(function(err, doc) {
      // Status 500 - server error
      if(err) return res.status(500).json({
        // Set a json object to send back
        title: "An error occured",
        err: err
      });
      // Status 201 - new resourse created
      res.status(200).json({
        message: "Message updated",
        obj: doc
      });
    });
  });
});


router.delete('/:id', function(req, res, next) {
  // Find by ID
  Message.findById(req.params.id, function(err, doc) {
    if(err) return res.status(500).json({
      // Set a json object to send back
      title: "An error occured",
      err: err
    });
    if(!doc) return res.status(500).json({
      // Set a json object to send back
      title: "No messaage found",
      err: new Error("No messaage found")
    });
    // Delete
    doc.remove(function(err, doc) {
      // Status 500 - server error
      if(err) return res.status(500).json({
        // Set a json object to send back
        title: "An error occured",
        err: err
      });
      // Status 201 - new resourse created
      res.status(200).json({
        message: "Message deleted",
        obj: doc
      });
    });
  });
});

module.exports = router;
