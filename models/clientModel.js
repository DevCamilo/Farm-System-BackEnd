'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp-plugin');

const Client = Schema({
    name: String,
    lastName: String,
    telephone: String,
    document: String,
    status: { type: Boolean, default: true },
    typeUser: Number
});

Client.plugin(timestamp, {
    createdName: 'created_at',
    updatedName: 'updated_at',
    disableCreated: false,
    disableUpdated: false
});

module.exports = mongoose.model('clients', Client);