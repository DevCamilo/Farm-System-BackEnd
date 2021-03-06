'use strict'

const express = require('express');
const { celebrate, Joi } = require('celebrate');
const api = express.Router();
const CropController = require('../controllers/CropController');
const Auth = require('../middlewares/auth');

api.post('/create-crop', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        responsable: Joi.string().required(),
        employees: Joi.array().required(),
        pests: Joi.string().required(),
        comment: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CropController.createCrop);

api.get('/list-crop', CropController.listCrop);

api.get('/list-crop-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CropController.listCropById);

api.put('/update-crop', celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string(),
        description: Joi.string(),
        responsable: Joi.string(),
        employees: Joi.array(),
        pests: Joi.string(),
        comment: Joi.string()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CropController.updateCrop);

api.delete('/delete-crop/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CropController.updateCrop);

api.get('/list-crop-responsable/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CropController.listCropByResponsable);

module.exports = api;