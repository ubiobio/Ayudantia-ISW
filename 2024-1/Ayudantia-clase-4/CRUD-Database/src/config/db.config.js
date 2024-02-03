import mongoose from "mongoose";
import { DB_URL } from "./env.config.js";

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

