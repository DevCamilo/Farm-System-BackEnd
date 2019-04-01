'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeCrop = new Schema({
    name: String,
    description: String,
    characteristics: String,
    pests: [{
        pests_name: String,
        pests_description: String
    }],
    fertilizers: [{
        fertilizers_name: String,
        fertilizers_description: String
    }],
    img: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('type_crops', TypeCrop);