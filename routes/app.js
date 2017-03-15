var express = require('express');
var router = express.Router();

// The Home route
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
