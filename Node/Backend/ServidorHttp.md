## Servidor HTTP con Node


### Creando nuestro servidor

- Nos posicionamos con la terminal en la carpeta donde queremos crear nuestro proyecto.
- Ejecutamos el comando `npm init` para crear el archivo `package.json` en el directorio actual.
- Ejecutamos el comando `npm install express` para instalar el paquete `express` y agregarlo a la lista de dependencias en `package.json`.
- Creamos el archivo `index.js` en la raiz del proyecto.
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

- Ejecutamos el comando `node index.js` para iniciar el servidor.
- Abrimos el navegador y accedemos a la dirección `http://localhost:3000/` para ver el mensaje de "Hola Mundo" en la pantalla.
- Detenemos el servidor con `Ctrl + C`.

### Recomendacion:

- Para evitar tener que ejecutar el comando `node index.js` cada vez que se realice un cambio en el código, se recomienda instalar el paquete `nodemon` de forma global en el sistema con el comando `npm install -g nodemon`.
- Una vez instalado, ejecutamos el comando `nodemon index.js` para iniciar el servidor.
- O tambien podemos agregar el script `start` en el archivo `package.json` para ejecutar el comando `nodemon index.js` con el comando `npm start`.
- Ejemplo:
    
    ```json
    {
        "name": "servidor-http",
        "version": "1.0.0",
        "description": "Servidor HTTP con Node",
        "main": "index.js",
        "scripts": {
            "start": "nodemon index.js"
        },
        "keywords": [
            "node",
            "backend",
            "http"
        ],
        "author": "Camilo saez",
        "license": "MIT",
        "dependencies": {
            "express": "^4.17.1"
        }
    }
    ```
- Cada vez que se realice un cambio en el código, el servidor se reiniciará automáticamente.

### Agregando rutas

- Agregamos el siguiente codigo:

```js
// Define una ruta para la página de 'usuarios'
app.get('/api/usuarios', (req, res) => {
    res.send('Lista de usuarios');
});

// Define una ruta para la página de 'contacto'
app.get('/api/contacto', (req, res) => {
    res.send('Contacto');
});

```
- Abrimos el navegador y accedemos a las direcciones `http://localhost:3000/usuario` y `http://localhost:3000/contacto` para ver los mensajes de "Lista de usuarios" y "Contacto" en la pantalla.

### Recibir info desde el cliente:

- Recordemos que los datos que enviamos desde el cliente a través de una petición HTTP se envían en la URL o en el cuerpo de la petición.
- Para recibir los datos enviados desde el cliente, podemos acceder a ellos a través de los objetos `req.query` y `req.body`.
- Si nuestra URL es http://localhost:3000/usuario?nombre=camilo&apellido=saez, agregamos el siguiente codigo:

```js
// Define una ruta para la página de 'usuarios'
app.get('/api/usuarios', (req, res) => {
    // Recibe los datos enviados desde el cliente a través de la URL
    const nombre = req.query?.nombre;
    const apellido = req.query?.apellido;
    
    // Envía los datos recibidos al cliente
    res.send(`Nombre: ${nombre} ${apellido} `);
});

```

- Si nuestra URL es http://localhost:3000/usuario y enviamos los datos desde el cliente a través del cuerpo de la petición, agregamos el siguiente codigo:

```js
// Define una ruta para la página de 'usuarios'
app.post('/api/usuarios', (req, res) => {
    // Recibe los datos enviados desde el cliente a través del cuerpo de la petición
    const nombre = req.body?.nombre;
    const apellido = req.body?.apellido;
    
    // Envía los datos recibidos al cliente
    res.send(`Nombre: ${nombre} ${apellido} `);
});

```

### Estandarizar la respuesta del servidor:

- Para estandarizar la respuesta del servidor, creamos una funcion que recibe como parametro el objeto `res` y devuelve un objeto con la estructura de la respuesta.
- Agregamos el siguiente codigo:

```js
// Función para estandarizar la respuesta del servidor
function respuestaExistosa(res, status, data) {
    return res.status(status).json({
        status: status,
        data: data
    });
}

// Función para estandarizar la respuesta del servidor cuando ocurre un error
function respuestaError(res, status, error) {
    return res.status(status).json({
        status: status,
        error: error
    });
}

```
# Importante!

- Para _responder correctamente un objeto JSON_, en nuestro index.js agregamos el siguiente codigo:

```js
// Agregamos el siguiente codigo para que el servidor pueda responder correctamente un objeto json
//*Debajo de la instancia de la aplicación*
app.use(express.json());
```

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