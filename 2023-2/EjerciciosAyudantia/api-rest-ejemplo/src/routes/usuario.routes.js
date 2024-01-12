// Importa el mÃ³dulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de usuarios
const usuarioController = require('../controllers/usuario.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios
router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);

// Exporta el enrutador
module.exports = router;
