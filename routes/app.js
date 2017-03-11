var express = require('express');
var router = express.Router();
// Import a DB model
// var User = require('../models/user');

// The Home route
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
