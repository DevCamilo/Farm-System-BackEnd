'use strict'
// Package requeridos
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Parametros base de datos
const DB = require('./DB');
// Parsear el body tipo JSON
const bodyParser = require('body-parser');

// Rutas AOI
const ClientRoutes = require('./routes/clientRoute');

// Conexión base de datos
mongoose.connect(`mongodb://${DB.user}:${DB.password}@${DB.hots}:${DB.port}/${DB.database}`, (err, con) => {
    if(err){
        console.log('Error en la conexión: ' + err);
    } else {
        console.log('Conexion DB Exitosa')
    }
});

app.use(bodyParser.json());
app.use(ClientRoutes);

app.listen(3000, () => {
    console.log("Server Corriendo");
});

