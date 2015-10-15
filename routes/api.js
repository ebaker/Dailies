var express = require('express');
var router = express.Router();
var tasks = require('./tasks');
var users = require('./users');

//version 0.1
router.all('/tasks', tasks);
router.all('/users', users);

module.exports = router;

