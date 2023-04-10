//Importa el modulo 'path' para obtener la ruta absoluta del archivo .env
const path = require('path');

// Obtiene la ruta absoluta del archivo .env
const configEnv = () => {
  const envFilePath = path.resolve(__dirname, `.env`);
  // Carga las variables de entorno desde el archivo .env
  require('dotenv').config({ path: envFilePath });
  // Retorna un objeto con las variables de entorno
  return {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    URI: process.env.URI,
  };
};

module.exports = { configEnv };
