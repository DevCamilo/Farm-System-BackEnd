'use strict'

const TaskController = require('../controllers/taskController');
const express = require('express');
const api = express.Router();

api.post('/create-task', TaskController.createtask);
api.get('/list-task', TaskController.listTask);

module.exports = api;
