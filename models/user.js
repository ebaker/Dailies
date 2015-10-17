var mongoose = require('mongoose');
var UserSchema = mongoose.Schema;
var Task = require('./task.js');
var User = new UserSchema({
  phone: String,
  tasks: [{
  	title: String,
  	time: Number,
  	complete: Boolean
  }],
  complete: Boolean
});

module.exports.model = mongoose.model("dailiesUser", User);