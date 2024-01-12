// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'tareas'
const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

// Crea el modelo de datos 'Tarea' a partir del esquema 'tareaSchema'
const Tarea = mongoose.model('Tarea', tareaSchema);

// Exporta el modelo de datos 'Tarea'
module.exports = Tarea;
