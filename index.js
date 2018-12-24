'use strict'
// Package requeridos
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Parametros base de datos
const DB = require('./DB');
// Parsear el body tipo JSON
const bodyParser = require('body-parser');

// Rutas API
const ClientRoutes = require('./routes/clientRoute');
const TaskRoutes = require('./routes/taskRoute');

// Conexión base de datos
mongoose.connect(`mongodb://${DB.user}:${DB.password}@${DB.host}:${DB.port}/${DB.database}`, { useNewUrlParser: true }, (err, con) => {
    if (err) {
        console.log('Error en la conexión');
    } else {
        console.log('Conexion DB Exitosa')
    }
});

// Parsea el body del request en archivos JSON
app.use(bodyParser.json());

// Lista de rutas
app.use(ClientRoutes);
app.use(TaskRoutes);

// Se crea el servidor
app.listen(3000, () => {
    console.log("Server Corriendo");
});

