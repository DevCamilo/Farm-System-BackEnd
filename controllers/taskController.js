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
    query.id_origin = mongoose.Types.ObjectId(req.headers.id_origin);
    query.id_receiver = mongoose.Types.ObjectId(req.headers.id_receiver);
    query.timeLimit = new Date(moment(req.body.finish).toISOString());
    const task = new TaskModel(query);
    task.save((err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al guardar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Lista todas las tareas con status true
 * @param {*} req 
 * @param {*} res 
 */
function listTask(req, res) {
    TaskModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar las tareas' });
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
            res.status(500).send({ status: false, error: 'Fallo al listar la tarea' });
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
            res.status(500).send({ status: false, error: 'Fallo al listar la tarea' });
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
            res.status(500).send({ status: false, error: 'Fallo al listar la tarea' });
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
    let query = req.body;
    query.updated_at = new Date(moment().toISOString());
    TaskModel.findOneAndUpdate(req.query.id, query, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al actualizar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
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
            res.status(500).send({ status: false, error: 'Fallo al eliminar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
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