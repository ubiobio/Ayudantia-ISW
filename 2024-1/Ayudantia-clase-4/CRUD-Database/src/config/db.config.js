import mongoose from "mongoose";
import { DB_URL } from "./env.config.js";
/* Esta parte quedo obsoleta por la version 4.0 o superior, ya no es necesario escribir esto, debido a que viene predeterminado
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
*/
/**
 * Conexión con la base de datos.
 * @async
 * @function setupDB
 * @throws {Error} Si no se puede conectar a la base de datos.
 * @returns {Promise<void>} Una promesa que se resuelve cuando se establece la conexión con la base de datos.
 */
export async function setupDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("=> Conectado a la base de datos");
  } catch (err) {
    console.log(err)
  }
}
