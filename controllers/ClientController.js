'use strict'

const ClientModel = require('../models/ClientModel');
const moment = require('moment');

/**
 * Crea un nuevo usuario segun los datos del body.
 * @param {*} req 
 * @param {*} res 
 */
function createClient(req, res) {
    const query = req.body;
    const client = new ClientModel(query);
    // Verifica que el user name no exista
    ClientModel.find({ userName: req.body.userName }, (err, data1) => {
        if (data1.length > 0) {
            res.status(500).send({ status: false, error: 'El nombre de usuario ya existe' });
        } else {
            client.save((err, data2) => {
                if (err) {
                    res.status(500).send({ status: false, error: 'Fallo al guardar los datos' });
                } else {
                    res.status(200).send({ status: true, data: data2 });
                }
            });
        }
    });

}

/**
 * Trae todos los usuarios con status true
 * @param {*} req 
 * @param {*} res 
 */
function listClient(req, res) {
    ClientModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar los datos' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Trae un cliente segun el ID
 * @param {*} req 
 * @param {*} res 
 */
function listClientByID(req, res) {
    console.log(req.query.id);
    
    ClientModel.findById(req.query.id, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar los datos' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Actualiza los datos del cliente que vengan por el body
 * @param {*} req 
 * @param {*} res 
 */
function updateClient(req, res) {
    let query = req.body;
    query.created_at = new Date(moment().toISOString());
    ClientModel.findByIdAndUpdate(req.query.id, query, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar los datos' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Cambia el status de un cliente.
 * @param {*} req 
 * @param {*} res 
 */
function deleteClient(req, res) {
    ClientModel.findByIdAndUpdate(req.query.id, {
        status: false,
        created_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar los datos' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

module.exports = {
    createClient,
    listClient,
    listClientByID,
    updateClient,
    deleteClient
}
