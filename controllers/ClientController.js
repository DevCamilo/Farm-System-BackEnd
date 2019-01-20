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
    // Verifica que el user name no exista
    ClientModel.find({ userName: query.userName }, (err2, data1) => {
        if (data1.length > 0) {
            res.status(200).send({ status: false, error: 'El nombre de usuario ya existe' });
        } else {
            ClientModel.create(query, (err2, data2) => {
                if (err2) {
                    res.status(200).send({ status: false, error: 'Fallo al guardar los datos' });
                } else {
                    res.status(200).send({ status: true, message: 'Usuario creado exitósamente' });
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
            res.status(200).send({ status: false, error: 'Fallo al listar los datos' });
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
    ClientModel.findById(req.query.id, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, error: 'Fallo al listar los datos' });
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
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    ClientModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, error: 'Fallo al actualizar los datos' });
        } else {
            res.status(200).send({ status: true, message: 'Actualizado exitosamente' });
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
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, error: 'Fallo al listar los datos' });
        } else {
            res.status(200).send({ status: true, message: 'Eliminado correctamente' });
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
