'use strict'

const express = require('express');
const api = express.Router();
const LoginController = require('../controllers/LoginController');
const { celebrate, Joi } = require('celebrate');

api.post('/login', celebrate({
    body: Joi.object().keys({
        userName: Joi.string().required(),
        password: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, LoginController.login);

module.exports = api;