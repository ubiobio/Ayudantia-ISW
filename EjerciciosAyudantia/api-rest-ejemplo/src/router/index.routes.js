// Importa el mÃ³dulo 'express' para crear las rutas
const express = require('express');

// Importa el enrutador de usuarios
const usuarioRoutes = require('./usuario.routes.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use('/usuarios', usuarioRoutes);

// Exporta el enrutador
module.exports = router;
