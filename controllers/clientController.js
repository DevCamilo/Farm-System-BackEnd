'use strict'

const ClientModel = require('../models/clientModel');

function createClient(req,res){
    const cliente = new ClientModel({
        name: req.body.name,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        document: req.body.document,
        typeUser: req.body.typeUser
    });
    cliente.save((err, data) => {
        if(err){
            res.status(500).send({status: false, error: 'Fallo al guardar los datos'});
        } else {
            res.status(200).send({status: true, respuesta: data});
        }
    });
}

function listClient(req, res){
    ClientModel.find({}, (err, data) => {
        if(err){
            res.status(500).send({status: false, error: 'Fallo al listar los datos'});
        } else {
            res.status(200).send({status: true, respuesta: data});
        }
    });
}

module.exports = {
    createClient,
    listClient
}