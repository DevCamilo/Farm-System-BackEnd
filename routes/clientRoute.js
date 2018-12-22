'use strict'

const ClientController = require('../controllers/clientController');
const express = require('express');
const api = express.Router();

api.post('/create-client', ClientController.createClient);
api.get('/list-client', ClientController.listClient);

module.exports = api;