// Importa el mÃ³dulo 'mongoose' para crear la conexiÃ³n a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colecciÃ³n 'usuarios'
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Crea el modelo de datos 'Usuario' a partir del esquema 'usuarioSchema'
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exporta el modelo de datos 'Usuario'
module.exports = Usuario;
