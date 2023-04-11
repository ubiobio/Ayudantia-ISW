// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require('./configEnv.js');

// Importa el mÃÂÃÂ³dulo 'express' para crear la aplicaciÃÂÃÂ³n web
const express = require('express');

// Importa el enrutador principal
const indexRoutes = require('./router/index.routes.js');

// Obtiene las variables de entorno
const { PORT } = configEnv();

// Importa el archivo 'configDB.js' para crear la conexiÃÂÃÂ³n a la base de datos
require('./configDB.js');

// Crea una instancia de la aplicaciÃÂÃÂ³n
const app = express();

// Define una ruta para la pÃÂÃÂ¡gina principal de la aplicaciÃÂÃÂ³n ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Agrega el enrutador principal al servidor
app.use('/api', indexRoutes);

// Inicia el servidor web en el puerto 3000
// La funciÃÂÃÂ³n de callback muestra un mensaje en la consola indicando que el servidor estÃÂÃÂ¡ en ejecuciÃÂÃÂ³n
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
