var express = require('express');
var User = require('../models/user.js');
var tasks = require('./tasks');

var router = express.Router();


//creates a user with req.body.password and req.body.phone
function createUser(req, res){
	//TODO: check if valid input
	var encryptedPasswordInput = require('crypto').createHash('md5').update(req.body.password).digest('hex');
	var tempUser = new User.model({
		phone: req.body.phone,
		password: encryptedPasswordInput
	});
	tempUser.save(function(err, data){
		if(err) res.send({status:400, data:null, message:err});
		else res.send({status:200, data:null, message:tempUser+" Saved"});
	}); 
}


//prints out all users
function readUsers(req, res){
	User.model.find({},function(err, users){
		var userMap = {};
		users.forEach(function(user){
			userMap[user._id] = user;
		})
		if(err) res.send({status:400, data:null, message:err});
		else res.send({status:200, data:userMap, message:"Fetching Users"});
	});
}
//reads a single user with phone param
function readUser(req, res){
	User.model.find({phone:req.params.phone}, function(err, user){
		if(err) res.send({status:400, data:null, message:err});
		else res.send({status:200, data:user, message:req.body.phone+" Fetched"})
	});
}

//updates a users task
function updateUser(req, res){
	User.model.find({phone:req.body.phone}, function(err, user){
		if(!user){
			res.send({status:400, data:null, message: req.body.phone+" Does not exist"});
		}else if(err){
			res.send({status:400, data:null, message: err});
		}else{
			user.modified = new User.model({
			})
			user.save(function(err){
				if(err) res.send({status:400, data:null, message: err});
				else res.send({status:200, data:null, message: req.body.phone+" Updated"});
			})
		}
	});
}

//deletes a user
function deleteUser(req, res){
	User.model.findOne({_id:req.params.phone}).remove(function(err){
		if(err) res.send({status:400, data:null, message:err});
		else res.send({status:200, data:null, message:req.params.phone+" Removed"});
	});
}
//deletes all users
function deleteUsers(req, res){
	User.model.remove().exec();
	res.send({status:200, data:null, message:"Deleted "+User});
}

//crud user
router.post('/users', createUser);
router.get('/users', readUsers);
router.get('/users/:phone', readUser);
router.put('/users', updateUser);
router.delete('/users', deleteUsers);
router.delete('/users/:phone', deleteUser);
router.all('/users/:phone/tasks/:id?', tasks);



module.exports = router;

