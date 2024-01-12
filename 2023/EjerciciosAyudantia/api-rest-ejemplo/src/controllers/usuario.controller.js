// Importa el modelo de datos 'Usuario'
const Usuario = require('../models/usuario.model.js');

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const usuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
    });

    const nuevoUsuario = await usuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
