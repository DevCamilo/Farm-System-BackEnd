'use strict'

const ClientController = require('../controllers/ClientController');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-client', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        telephone: Joi.string().required(),
        document: Joi.string().required(),
        typeUser: Joi.number().integer().required(),
        userName: Joi.string().required(),
        password: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({status: false, message: 'Faltan datos por enviar'});
}, ClientController.createClient);

api.get('/list-client', ClientController.listClient);

api.get('/list-client-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({status: false, message: 'Faltan datos por enviar'});
}, ClientController.listClientByID);

api.put('/update-client', celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string(),
        lastName: Joi.string(),
        telephone: Joi.string(),
        document: Joi.string(),
        typeUser: Joi.number().integer()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({status: false, message: 'Faltan datos por enviar'});
}, ClientController.updateClient);

api.delete('/delete-client/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({status: false, message: 'Faltan datos por enviar'});
}, ClientController.deleteClient);

module.exports = api;