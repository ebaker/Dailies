var mongoose = require('mongoose');
var TaskSchema = mongoose.Schema;
var Task = new TaskSchema({
  title: String,
  length: String,
  complete: Boolean
});

module.exports.model = mongoose.model("dailiesTask", Task);