'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp-plugin');

const Crop = Schema({
    name: String,
    description: String,
    responsable: { type: Schema.ObjectId, ref: 'clients' },
    employees: [],
    pests: String,
    comment: String,
    status: { type: Boolean, default: true}
});

Crop.plugin(timestamp, {
    createdName: 'created_at',
    updatedName: 'updated_at',
    disableCreated: false,
    disableUpdated: false
});

module.exports = mongoose.model('crop', Crop);
