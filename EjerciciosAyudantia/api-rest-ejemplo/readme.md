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
    data: data,
  });
}

// Función para estandarizar la respuesta del servidor cuando ocurre un error
function respuestaError(res, status, error) {
  return res.status(status).json({
    status: status,
    error: error,
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
