// Importa el modulo 'mongoose' para crear la conexion a la base de datos
import { connect } from 'mongoose';

// Agregamos la configuracion de las variables de entorno
import { DB_URL } from './env.config.js';

// Opciones de configuracion para la conexion a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * @name setupDB
 * @description Funcion que crea la conexion a la base de datos
 * @returns {Promise<void>}
 * @throws {Error}
 */
export async function setupDB() {
  try {
    await connect(DB_URL, options);
    console.log('=> Conectado a la base de datos');
  } catch (err) {
    console.log('/configDB.js -> setupDB', err);
  }
}
