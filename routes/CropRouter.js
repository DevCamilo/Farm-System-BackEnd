'use strict'

const express = require('express');
const { celebrate, Joi } = require('celebrate');
const api = express.Router();
const CropController = require('../controllers/CropController');

api.post('/create-crop', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        responsable: Joi.string().required(),
        employees: Joi.array().required(),
        pests: Joi.string().required(),
        comment: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({ status: false, message: 'Faltan datos por enviar o no son correctos' });
}, CropController.createCrop);

api.get('/list-crop', CropController.listCrop);

api.get('/list-crop-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({ status: false, message: 'Faltan datos por enviar o no son correctos' });
}, CropController.listCropById);

api.post('/update-crop/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown(),
    body: Joi.object().keys({
        name: Joi.string(),
        description: Joi.string(),
        responsable: Joi.string(),
        employees: Joi.array(),
        pests: Joi.string(),
        comment: Joi.string()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({ status: false, message: 'Faltan datos por enviar o no son correctos' });
}, CropController.updateCrop);

api.get('/delete-crop/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({ status: false, message: 'Faltan datos por enviar o no son correctos' });
}, CropController.updateCrop);

module.exports = api;