'use strict'

const TaskController = require('../controllers/taskController');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-task', celebrate({
    headers: Joi.object({
        key: Joi.string().required()
    }).unknown(),
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        priority: Joi.number().integer().required(),
        id_origin: Joi.string().required(),
        id_receiver: Joi.string().required(),
        timeLimit: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, TaskController.createtask);

api.get('/list-task', celebrate({
    headers: Joi.object({
        key: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, TaskController.listTask);

api.get('/list-task-id', celebrate({
    headers: Joi.object({
        key: Joi.string().required(),
        _id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, TaskController.listTaskByID);

api.get('/list-task-id_origin', celebrate({
    headers: Joi.object({
        key: Joi.string().required(),
        id_origin: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, TaskController.listTaskByIdOrigin);

api.get('/list-task-id_receiver', celebrate({
    headers: Joi.object({
        key: Joi.string().required(),
        id_receiver: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, TaskController.listTaskByIdReceiver);

api.get('/delete-task', celebrate({
    headers: Joi.object({
        key: Joi.string().required(),
        _id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, TaskController.deleteTask);

api.post('/update-task', celebrate({
    headers: Joi.object({
        key: Joi.string().required(),
        _id: Joi.string().required()
    }).unknown(),
    body: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        priority: Joi.number().integer(),
        id_origin: Joi.string(),
        id_receiver: Joi.string(),
        timeLimit: Joi.string()
    }).unknown()
}), TaskController.updateTask);

module.exports = api;
