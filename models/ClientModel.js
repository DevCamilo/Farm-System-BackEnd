'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = Schema({
    name: String,
    lastName: String,
    telephone: String,
    document: String,
    status: { type: Boolean, default: true },
    typeUser: Number,
    userName: String,
    password: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('clients', Client);
