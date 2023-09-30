"use strict";
// Importa el modulo 'path' para obtener la ruta absoluta del archivo .env
const path = require("path");

/**  Obtiene la ruta absoluta del archivo .env. */
const envFilePath = path.resolve(__dirname, ".env");

// Carga las variables de entorno desde el archivo .env
require("dotenv").config({ path: envFilePath });

/** Puerto del servidor */
const PORT = process.env.PORT;
/** Host del servidor */
const HOST = process.env.HOST;
/** URL de la base de datos */
const DB_URL = process.env.DB_URL;
/** Secreto para el token de acceso */
const ACCESS_JWT_SECRET = process.env.ACCESS_JWT_SECRET;
/** Secreto para el token de refresco */
const REFRESH_JWT_SECRET = process.env.REFRESH_JWT_SECRET;

module.exports = { PORT, HOST, DB_URL, ACCESS_JWT_SECRET, REFRESH_JWT_SECRET };
