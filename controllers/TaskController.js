'use strict'

const TaskModel = require('../models/TaskModel');
const moment = require('moment');
const mongoose = require('mongoose');

/**
 * Crea una nueva tareas
 * @param {*} req 
 * @param {*} res 
 */
function createtask(req, res) {
    let query = req.body;
    TaskModel.create(query, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al guardar la tarea' });
        } else {
            res.status(200).send({ status: true, message: 'Creación exitosa' });
        }
    });
}

/**
 * Lista todas las tareas con status true
 * @param {*} req 
 * @param {*} res 
 */
function listTask(req, res) {
    TaskModel.find({ status: true }).sort({ created_at: -1 }).exec((err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al listar las tareas' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Lista las tareas segun el id_origin o el id_receiver
 * @param {*} req 
 * @param {*} res 
 */
function listTaskByID(req, res) {
    TaskModel.findById(req.query.id, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al listar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Lista las tareas asiganadas por un usuario
 * @param {*} req 
 * @param {*} res 
 */
function listTaskByIdOrigin(req, res) {
    TaskModel.find({ id_origin: mongoose.Types.ObjectId(req.query.id) }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al listar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    })
}

/**
 * Lista las tareas que fueron asiganadas a un usuario
 * @param {*} req 
 * @param {*} res 
 */
function listTaskByIdReceiver(req, res) {
    TaskModel.find({ id_receiver: mongoose.Types.ObjectId(req.query.id) }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al listar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    })
}

/**
 * Actualiza los campos de una tarea especifica
 * @param {*} req 
 * @param {*} res 
 */
function updateTask(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    TaskModel.findOneAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al actualizar la tarea' });
        } else {
            res.status(200).send({ status: true, message: 'Actualización exitosa' });
        }
    })
}

/**
 * Elimina una tareas segun el id
 * @param {*} req 
 * @param {*} res 
 */
function deleteTask(req, res) {
    TaskModel.findByIdAndUpdate(req.query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Fallo al eliminar la tarea' });
        } else {
            res.status(200).send({ status: true, message: 'Eliminación exitosa' });
        }
    });
}

module.exports = {
    createtask,
    listTask,
    listTaskByID,
    listTaskByIdOrigin,
    listTaskByIdReceiver,
    updateTask,
    deleteTask
}
