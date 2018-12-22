'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB = require('./DB');

mongoose.connect(`mongodb://${DB.user}:${DB.password}@${DB.hots}:${DB.port}/${DB.database}`, (err, con) => {
    if(err){
        console.log('Error en la conexión: ' + err);
    } else {
        console.log('Conexion DB Exitosa')
    }
});


app.listen(3000, () => {
    console.log("Server Corriendo");
});

