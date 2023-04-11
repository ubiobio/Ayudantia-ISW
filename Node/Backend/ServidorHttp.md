## Servidor HTTP y Api rest desde Node

## **_Recordar_**

- **Instalar Postman o Insomnia para realizar las peticiones HTTP**.
- Instalar el paquete `nodemon` de forma global en el sistema con el comando `npm install -g nodemon`.

## Objetivo de la Api rest, crear un TODO list con usuarios.

- Explicacion de la problematica:
  - Tenemos una lista de tareas pendientes.
  - Cada tarea tiene un título y una descripcion.
  - Cada tarea puede estar en estado incompleto o completada.
  - Cada usuario tiene un nombre y un email.
  - Cada usuario puede tener una lista de tareas completadas.
  - Cada usuario puede tener una lista de tareas incompletas.


- Lista de los pasos a seguir:
  - [Parte 1: Configuraciones iniciales](#parte-1--configuraciones-iniciales)
    - Crear nuestro servidor
    - Crear nuestra base de datos
    - Crear la configuración de las variables de entorno
    - Crear la conexion a la base de datos
  - Parte 2: Crear nuestra API REST
    - Crear nuestro modelo de datos:
      - Usuario
      - Tarea
    - Crear las rutas de nuestra API REST:
      - /usuarios
      - /tareas
    - Crear los controladores de nuestra API REST:
      - /usuarios, GET, POST, PUT, DELETE
      - /tareas , GET, POST, PUT, DELETE
  - Parte 3: Mejoras a nuestra API REST
    - Crear los utils de nuestra API REST:
      - responseHandler.js

- Estructura de carpetas:
  - A lo largo de este tutorial se ira creando la estructura de carpetas del proyecto, pero para tener una idea de como quedara el proyecto al final, se muestra la siguiente estructura:
```bash
├── NombreProyecto
│   ├── node_modules
│   ├── src
│   │   ├── controllers
│   │   │   ├── tareas.controller.js
│   │   │   └── usuarios.controller.js
│   │   ├── models
│   │   │   ├── tarea.model.js
│   │   │   └── usuario.model.js
│   │   ├── routes
│   │   │   ├── tareas.route.js
│   │   │   └── usuarios.route.js
│   │   │   └── router.js
│   │   ├── utils
│   │   │   └── responseHandler.js
│   │   ├── .env
│   │   ├── configDB.js
│   │   ├── configEnv.js
│   │   └── server.js
│   ├── .gitignore
│   └──  package.json

````

- Dentro del archivo `.gitignore` en la raiz del proyecto y agregar el siguiente contenido:

```bash
# Ignorar los archivos de configuración de node
node_modules
````
----------------
## Parte 1: Configuraciones iniciales
### Creando nuestro servidor

- Nos posicionamos con la terminal en la carpeta donde queremos crear nuestro proyecto.
- Ejecutamos el comando `npm init` para crear el archivo `package.json` en el directorio actual.
- Ejecutamos el comando `npm install express` para instalar el paquete `express` y agregarlo a la lista de dependencias en `package.json`.
- Creamos el archivo `server.js` en la carpeta `/src` del proyecto. ( `src` es la carpeta donde se guardan los archivos fuente del proyecto, recuerda crearla)
- Agregamos el siguiente codigo:

```js
// Importa el módulo 'express' para crear la aplicación web
const express = require('express');

// Crea una instancia de la aplicación
const app = express();

// Define una ruta para la página principal de la aplicación ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Inicia el servidor web en el puerto 3000
// La función de callback muestra un mensaje en la consola indicando que el servidor está en ejecución
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

```

- Ejecutamos el comando `node src/server.js` para iniciar el servidor.
- Abrimos el navegador y accedemos a la dirección `http://localhost:3000/` para ver el mensaje de "Hola Mundo" en la pantalla.
- Detenemos el servidor con `Ctrl + C`.



### Recomendacion:

- Para evitar tener que ejecutar el comando `node src/server.js` cada vez que se realice un cambio en el código, se recomienda instalar el paquete `nodemon` de forma global en el sistema con el comando `npm install -g nodemon`.
- Una vez instalado, ejecutamos el comando `nodemon src/server.js` para iniciar el servidor.
- O tambien podemos agregar el script `start` en el archivo `package.json` para ejecutar el comando `nodemon src/server.js` con el comando `npm start`.
  - Ejemplo:

    ```json
    {
      "name": "servidor-http",
      "version": "1.0.0",
      "description": "Servidor HTTP con Node",
      "main": "src/server.js",
      "scripts": {
        "start": "nodemon src/index.js"
      },
      "keywords": [
        "node",
        "backend",
        "http"
      ],
      "author": "Camilo saez",
      "license": "MIT",
      "dependencies": {
        "dotenv": "^16.0.3",
        "express": "^4.17.1",
        "mongoose": "^7.0.3"
      }
    }
    ```
- Cada vez que se realice un cambio en el código, el servidor se reiniciará automáticamente.


### [Creando nuestra base de datos](./MongoDB.md)

### Configurando las variables de entorno

- Instalamos el paquete `dotenv` con el comando `npm install dotenv`.
- Creamos el archivo `configEnv.js` en la carpeta src del proyecto.
- Agregamos el siguiente codigo:

```js
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
```

- Importamos el archivo `configEnv.js` en el archivo `server.js`.
- Agregamos el siguiente codigo:

```js
// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require('./configEnv.js');
// Obtiene las variables de entorno
const { PORT, HOST, URI } = configEnv();
// Importa el mÃ³dulo 'express' para crear la aplicaciÃ³n web
const express = require('express');
// Crea una instancia de la aplicaciÃ³n
const app = express();
// Define una ruta para la pÃ¡gina principal de la aplicaciÃ³n ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});
// Inicia el servidor web en el puerto 3000
// La funciÃ³n de callback muestra un mensaje en la consola indicando que el servidor estÃ¡ en ejecuciÃ³n
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

```

- Creamos el archivo `.env` en la carpeta src del proyecto.
- Agregamos las siguientes variables de entorno:

```env
PORT=3000
HOST=localhost
URI=<Aqui va la url de la base de datos>
```
- Reiniciamos el servidor con `Ctrl + C` y ejecutamos el comando `npm start` para iniciar el servidor.

### Creando la conexion a la base de datos

- Instalamos el paquete `mongoose` con el comando `npm install mongoose`.
- Creamos el archivo `configDB.js` en la carpeta raiz.
- Agregamos el siguiente codigo:

```js
// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Obtiene la url de la base de datos desde las variables de entorno
const dbUrl = process.env.DB_URL;

// Opciones de configuración para la conexión a la base de datos
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Conecta a la base de datos
mongoose.connect(dbUrl, options)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

```

- Importamos el archivo `configDB.js` en el archivo `server.js`:

```js
// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require('./configEnv.js');
// Obtiene las variables de entorno
const { PORT, HOST, URI } = configEnv();
// Importa el archivo 'configDB.js' para crear la conexiÃ³n a la base de datos
require('./configDB.js');
// Importa el mÃ³dulo 'express' para crear la aplicaciÃ³n web
const express = require('express');
// Crea una instancia de la aplicaciÃ³n
const app = express();
// Define una ruta para la pÃ¡gina principal de la aplicaciÃ³n ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});
// Inicia el servidor web en el puerto 3000
// La funciÃ³n de callback muestra un mensaje en la consola indicando que el servidor estÃ¡ en ejecuciÃ³n
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});


```

- Con todo lo anterior ya podemos conectarnos a la base de datos.
- Reiniciamos el servidor con `Ctrl + C` y ejecutamos el comando `npm start` para iniciar el servidor.
- Si todo sale bien, en la consola debería aparecer el mensaje `Conectado a la base de datos`.
- Si aparece un error, revisar que la url de la base de datos sea correcta.
----------------
## Parte 2
### Creando el modelo de datos

- Las entidades de la base de datos se representan con modelos de datos.
- Los modelos de datos son clases que heredan de la clase `Schema` de `mongoose`.
- Cada modelo de datos representa una colección en la base de datos.
- Cada modelo de datos tiene un esquema que define las propiedades de los documentos de la colección.
- Cada modelo de datos tiene un nombre que representa la colección en la base de datos.



----------------
### Consideraciones de seguridad:

  - Es recomendable separar los detalles al manejar errores, para evitar que se muestren detalles del sistema al usuario.
  - Al usuario se le debe mostrar un mensaje genérico que no revele información sensible del sistema.
  - Al backend se le debe mostrar un mensaje detallado que ayude a identificar el error y solucionarlo.


### Ayuda y links

- [Express](https://expressjs.com/es/)
- [NPM](../NPM/NPM.md)

<br>

- [Volver al BackEnd](./Backend.md)
- [Volver al inicio](../../README.md)