'use strict'

const ClientController = require('../controllers/clientController');
const express = require('express');
const api = express.Router();

api.post('/create-client', ClientController.createClient);
api.get('/list-client', ClientController.listClient);
api.get('/list-client-id', ClientController.listClientByID);
api.post('/update-client', ClientController.updateClient);
api.get('/delete-client', ClientController.deleteClient);

module.exports = api;