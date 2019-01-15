'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = Schema({
    title: String,
    description: String,
    priority: Number,
    id_origin: { type: Schema.ObjectId, ref: 'clients' },
    id_receiver: { type: Schema.ObjectId, ref: 'clients' },
    status: { type: Boolean, default: true },
    progress: { type: Number, default: 1 } ,
    timeLimit: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('tasks', Task);
