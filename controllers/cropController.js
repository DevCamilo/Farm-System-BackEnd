'use strict'

const CropModel = require('../models/cropModel');
const moment = require('moment');

/**
 * Crea un nuevo cultivo en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
function createCrop(req, res) {
    const query = req.body;
    const crop = new CropModel(query);
    crop.save((err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al guardar el cultivo' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Trae todos los cultivos con status: true
 * @param {*} req 
 * @param {*} res 
 */
function listCrop(req, res) {
    CropModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar los cultivos' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Trae el cultivo segun si _id
 * @param {*} req 
 * @param {*} res 
 */
function listCropById(req, res) {
    CropModel.findById(req.headers._id, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar el cultivo' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Actualiza el cultivo según el _id
 * @param {*} req 
 * @param {*} res 
 */
function updateCrop(req, res) {
    let query;
    query.updated_at = new Date(moment().toISOString());
    CropModel.findByIdAndUpdate(req.headers._id, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al actuaizar el cultivo' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Cambia el status del cultivo para "eliminarlo"
 * @param {*} req 
 * @param {*} res 
 */
function deleteCrop(req, res) {
    CropModel.findByIdAndUpdate(req.headers._id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al eliminar el cultivo' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

module.exports = {
    createCrop,
    listCrop,
    listCropById,
    updateCrop,
    deleteCrop
}