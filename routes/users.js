var express = require('express');
var router = express.Router();

function createUser(req, res){

}

function readUser(req, res){
	res.send('read user');
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