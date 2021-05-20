/* eslint-disable no-console */
// importar express
const express = require('express');
const heroRouter = require('./routes/heroRouter');
const ramRouter = require('./routes/ramRouter');

// crear el servidor
const server = express();
server.use(express.json());

// Definir una ruta raíz

server.use('/api/heroes', heroRouter);
server.use('/api/ram', ramRouter);

// Escuchar en un puerto ....4000
const port = 4000;
server.listen(port, () => console.log(`Server is runnning in http://localhost:${port}`));