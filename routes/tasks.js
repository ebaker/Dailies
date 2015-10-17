var express = require('express');
var User = require('../models/user.js');
var Task = require('../models/task.js');
var router = express.Router();

//create tasks
function createTasks(req, res){
	User.model.findOne({phone:req.params.phone}, function(err, user){
		if(!user){
			res.send({status:400, data:null, message: req.params.phone+" Does not exist"});
		}else if(err){
			res.send({status:400, data:null, message: err});
		}else{
			user.tasks.push({
				title:req.body.title,
				time:req.body.time,
				complete: false
			})
			user.save(function(err){
				if(err) res.send({status:400, data:null, message: err});
				else res.send({status:200, data:null, message: req.params.phone+" Updated"});
			})
		}
	});
}

//read all tasks
function readTasks(req, res){
	User.model.find({},function(err, users){
		var userMap = {};
		users.forEach(function(user){
			userMap[user._id] = user.tasks;
		})
		if(err) res.send({status:400, data:null, message:err});
		else res.send({status:200, data:userMap, message:"Fetching Users"});
	});
}
//read one task
function readTask(req, res){

}

//delete tasks
function deleteTasks(req, res){

}

//update tasks
function updateTasks(req, res){

}

//crud tasks

router.post('/users/:phone/tasks', createTasks);
router.get('/users/:phone/tasks', readTasks);
router.get('/users/:phone/tasks/:id?', readTask);
router.put('/users/:phone/tasks', updateTasks);
router.delete('/users/:phone/tasks', deleteTasks);


module.exports = router;


/*
create user post
	'phone','password'

create task
	'title','time'
*/	