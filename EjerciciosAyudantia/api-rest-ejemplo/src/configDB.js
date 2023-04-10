// Importa el mÃ³dulo 'mongoose' para crear la conexiÃ³n a la base de datos
const mongoose = require('mongoose');

// Obtiene la url de la base de datos desde las variables de entorno
const dbUrl = process.env.DB_URL;

// Opciones de configuraciÃ³n para la conexiÃ³n a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conecta a la base de datos
mongoose
  .connect(dbUrl, options)
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.log(err));
