'use strict'

const ClientModel = require('../models/clientModel');

function createClient(req,res){
    const cliente = new ClientModel({
        name: req.body.name,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        document: req.body.document,
        typeUser: req.body.typeUser,
        userName: req.body.userName,
        password: req.body.password
    });
    ClientModel.find({userName: req.body.userName}, (err, data1) => {
        if(data1){
            res.status(500).send({status: false, error: 'El nombre de usuario ya existe'});
        } else {
            cliente.save((err, data2) => {
                if(err){
                    res.status(500).send({status: false, error: 'Fallo al guardar los datos'});
                } else {
                    res.status(200).send({status: true, data: data2});
                }
            });
        }
    });
    
}

function listClient(req, res){
    ClientModel.find({status: true}, (err, data) => {
        if(err){
            res.status(500).send({status: false, error: 'Fallo al listar los datos'});
        } else {
            res.status(200).send({status: true, data: data});
        }
    });
}

function listClientByID(req, res){
    ClientModel.findById(req.headers._id, (err, data) => {
        if(err){
            res.status(500).send({status: false, error: 'Fallo al listar los datos'});
        } else {
            res.status(200).send({status: true, data: data});
        }
    });
}

function updateClient(req, res){
    const query = {
        name: req.body.name,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        document: req.body.document,
        typeUser: req.body.typeUser
    };
    ClientModel.findByIdAndUpdate(req.headers._id, query, (err, data) => {
        if(err){
            res.status(500).send({status: false, error: 'Fallo al listar los datos'});
        } else {
            res.status(200).send({status: true, data: data});
        }
    });
}

function deleteClient(req, res){
    ClientModel.findByIdAndUpdate(req.headers._id, {status: false}, (err, data) => {
        if(err){
            res.status(500).send({status: false, error: 'Fallo al listar los datos'});
        } else {
            res.status(200).send({status: true, data: data});
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