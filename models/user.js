var mongoose = require('mongoose');
var UserSchema = mongoose.Schema;
var User = new UserSchema({
  phonenumber: String,
  //TODO: task array
  complete: Boolean
});

module.exports.model = mongoose.model("User", User);