// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require('./configEnv.js');

// Obtiene las variables de entorno
const { PORT } = configEnv();

// Importa el archivo 'configDB.js' para crear la conexiÃÂ³n a la base de datos
require('./configDB.js');

// Importa el mÃÂ³dulo 'express' para crear la aplicaciÃÂ³n web
const express = require('express');

// Crea una instancia de la aplicaciÃÂ³n
const app = express();

// Define una ruta para la pÃÂ¡gina principal de la aplicaciÃÂ³n ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Inicia el servidor web en el puerto 3000
// La funciÃÂ³n de callback muestra un mensaje en la consola indicando que el servidor estÃÂ¡ en ejecuciÃÂ³n
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
