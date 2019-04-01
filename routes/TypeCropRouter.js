'use strict'

const express = require('express');
const api = express.Router();
const TypeCropController = require('../controllers/TypeCropController');
const { celebrate, Joi } = require('celebrate');

api.post('/create-type-crop', TypeCropController.createTypeCrop);

module.exports = api;