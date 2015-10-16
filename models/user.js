var mongoose = require('mongoose');
var UserSchema = mongoose.Schema;
var User = new UserSchema({
  phone: String,
  //TODO: task array
  complete: Boolean
});

module.exports.model = mongoose.model("dailiesUser", User);