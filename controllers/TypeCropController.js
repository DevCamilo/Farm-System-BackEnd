'use strict'

const TypeCropModel = require('../models/TypeCropModel');

function createTypeCrop(req, res) {
    TypeCropModel.create(req.body, (err, res) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al guardas' });
        } else {
            res.status(200).send({ status: true, message: 'Guardado exitosamente' });
        }
    })
}

module.exports = {
    createTypeCrop
}