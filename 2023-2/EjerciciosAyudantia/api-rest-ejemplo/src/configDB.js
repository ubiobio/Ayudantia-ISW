// Importa el mÃ³dulo 'mongoose' para crear la conexiÃ³n a la base de datos
const mongoose = require('mongoose');

// Agregamos la configuraciÃ³n de las variables de entorno
const { configEnv } = require('./configEnv.js');

// Obtiene las variables de entorno
const { DB_URL } = configEnv();

// Opciones de configuraciÃ³n para la conexiÃ³n a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conecta a la base de datos
mongoose
  .connect(DB_URL, options)
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.log(err));
