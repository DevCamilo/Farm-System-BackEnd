'use strict'

const TaskModel = require('../models/taskModel');

function createtask (req, res){
    const task = new TaskModel({
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        id_origin: req.body.id_origin,
        id_receiver: req.body.id_receiver
    });
    task.save((err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al guardar la tarea' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listTask (req, res){
    TaskModel.find({}, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, error: 'Fallo al listar las tareas' });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

module.exports = {
    createtask,
    listTask
}