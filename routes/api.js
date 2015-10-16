var express = require('express');
var router = express.Router();
var users = require('./users');

//version 0.1
router.all('/users/:phone?', users);
module.exports = router;

