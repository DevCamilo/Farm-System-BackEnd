'use strict'

const TaskController = require('../controllers/taskController');
const express = require('express');
const api = express.Router();

api.post('/create-task', TaskController.createtask);
api.get('/list-task', TaskController.listTask);
api.get('/list-task-id', TaskController.listTaskByID);
api.get('/delete-task', TaskController.deleteTask);
api.post('/update-task', TaskController.updateTask);

module.exports = api;
