import { fileURLToPath } from "node:url";
import path from "node:path";
import dotenv from 'dotenv';

// Convierte la URL del archivo actual en una ruta de archivo
const __filename = fileURLToPath(import.meta.url);

// Obtiene el directorio del archivo actual
const __dirname = path.dirname(__filename);

// Obtiene la ruta del archivo .env
const envFilePath = path.resolve(__dirname, '.env')

// Carga las variables de entorno desde el archivo .env
dotenv.config({path: envFilePath});

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;