'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp-plugin');

const Task = Schema({
    title: String,
    description: String,
    priority: Number,
    id_origin: { type: Schema.ObjectId, ref: 'clients' },
    id_receiver: { type: Schema.ObjectId, ref: 'clients' },
    status: { type: Boolean, default: true },
    progress: { type: Number, default: 1 } 
});

Task.plugin(timestamp, {
    createdName: 'created_at',
    updatedName: 'updated_at',
    disableCreated: false,
    disableUpdated: false
});

module.exports = mongoose.model('tasks', Task);