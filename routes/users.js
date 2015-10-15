var express = require('express');
var User = require('../models/user.js');
var router = express.Router();

function createUser(req, res){
	//TODO: check if valid input
	var encryptedPasswordInput = require('crypto').createHash('md5').update(req.body.password).digest('hex');
	var tempUser = new User.model({
		email: req.body.email,
		password: encryptedPasswordInput
	});
	tempUser.save(function(err, data){
		if(err) res.send({status:400, data:null, message:err});
		res.send({status:200, data:null, message:tempUser+" Saved to database"});
	}); 
}

function readUser(req, res){
	User.model.find({},function(err,users){
		var userMap = {};
		users.forEach(function(user){
			userMap[user._id] = user;
		})
		res.send(userMap);
	});
}

function updateUser(req, res){

}

function deleteUser(req, res){

}

//crud user
router.post('/users', createUser);
router.get('/users', readUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);

module.exports = router;

