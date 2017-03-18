var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// Import a DB model
var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res, next) {
  // Get all records
  Message.find()
         // Pull out user's data by a reference
         .populate('user', 'firstName')
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

// On each request type
router.use('/', function(req, res, next) {
  // The token is stored in query string
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
      if(err) return res.status(401).json({
        title: 'Not authorized',
        error: err
      });
      // Move to the following routes
      next();
  });
});

router.post('/', function(req, res, next) {

  // Doesn't check for validity
  var decoded = jwt.decode(req.query.token);

  User.findById(decoded.user._id, function(err, user) {
    if(err) return res.status(500).json({
      title: "An error occured",
      err: err
    });

    var message = new Message({
      // Expect content property in the post request
      content: req.body.content,
      // User from DB
      user: user
    });

    message.save(function(err, doc) {
      // Status 500 - server error
      if(err) return res.status(500).json({
        // Set a json object to send back
        title: "An error occured",
        err: err
      });
      // Update user's array of messages
      user.messages.push(doc);
      user.save();
      // Status 201 - new resourse created
      res.status(201).json({
        message: "Message created",
        obj: doc
      });
    });

  });
});

router.patch('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  // Find by ID
  Message.findById(req.params.id, function(err, doc) {
    if (err) return res.status(500).json({
      // Set a json object to send back
      title: "An error occured",
      err: err
    });
    if (!doc) return res.status(500).json({
      // Set a json object to send back
      title: "No messaage found",
      err: new Error("No messaage found")
    });
    // If it doesn't belong to the current user, throw an error
    if (doc.user != decoded.user._id) return res.status(401).json({
      title: 'Not authorized',
      error: err
    });
    // Update the message's DB representation object
    // Where does "content" come from?
    doc.content = req.body.content;
    // Save
    doc.save(function(err, doc) {
      // Status 500 - server error
      if (err) return res.status(500).json({
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
  var decoded = jwt.decode(req.query.token);
  // Find by ID
  Message.findById(req.params.id, function(err, doc) {
    if (err) return res.status(500).json({
      // Set a json object to send back
      title: "An error occured",
      err: err
    });
    if (!doc) return res.status(500).json({
      // Set a json object to send back
      title: "No messaage found",
      err: new Error("No messaage found")
    });
    // If it doesn't belong to the current user, throw an error
    if (doc.user != decoded.user._id) return res.status(401).json({
      title: 'Not authorized',
      error: err
    });
    // Delete
    doc.remove(function(err, doc) {
      // Status 500 - server error
      if (err) return res.status(500).json({
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
