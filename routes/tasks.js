var express = require('express');
var router = express.Router();

function createTasks(req, res){

}

function readTasks(req, res){
	res.send('read task')
}

function deleteTasks(req, res){

}

function updateTasks(req, res){

}

//crud tasks

router.post('/tasks', createTasks);
router.get('/tasks', readTasks);
router.put('/tasks', updateTasks);
router.delete('/tasks', deleteTasks);


module.exports = router;

