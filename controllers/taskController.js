'use strict'

const TaskModel = require('../models/taskModel');
const moment = require('moment');

/**
 * Crea una nueva tareas
 * @param {*} req 
 * @param {*} res 
 */
function createtask(req, res) {
    const query = req.body;
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
    let _id;
    if (req.headers.id_origin) {
        _id = {
            id_origin: req.headers.id_origin
        };
    } else if (req.headers.id_receiver) {
        _id = {
            id_receiver: req.headers.id_receiver
        }
    } else {
        res.status(300).send({ status: false, error: 'El id no es valido' })
    }
    TaskModel.find(_id, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

/**
 * Actualiza los campos de una tarea especifica
 * @param {*} req 
 * @param {*} res 
 */
function updateTask(req, res) {
    const query = req.body;
    query.updated_at = new Date(moment().toISOString());
    TaskModel.findOneAndUpdate({ _id: req.headers._id }, query, (err, data) => {
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
    TaskModel.findByIdAndUpdate({ _id: req.headers }, {
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
    updateTask,
    deleteTask
}