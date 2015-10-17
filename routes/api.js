var express = require('express');
var router = express.Router();
var users = require('./users');
var tasks = require('./tasks');
//version 0.1
router.all('/users/:phone?', users);
router.all('/users/:phone/tasks/:id?', tasks)
module.exports = router;
