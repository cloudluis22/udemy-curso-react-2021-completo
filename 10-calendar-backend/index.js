const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config');
const cors = require('cors');

// Crear el server express
const app = express();

// Base de datos.
dbConnection();

//CORS
app.use(cors());

// Escuchar peticiones.
app.listen( process.env.PORT, () => {
    console.log('Server corriendo en el puerto 3100');
});

// Directorio público.
app.use( express.static('public') );

// Lectura y parseo del body.
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));