'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Crop = Schema({
    name: String,
    description: String,
    responsable: { type: Schema.ObjectId, ref: 'clients' },
    employees: [{ type: Schema.ObjectId, ref: 'clients' }],
    pests: String,
    comment: String,
    status: { type: Boolean, default: true}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('crop', Crop);
