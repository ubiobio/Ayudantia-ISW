## Modulo HTTP

- Este modulo proporciona una API para crear servidores HTTP y clientes HTTP en Node.js.
- Es util para crear aplicaciones web y API RESTful.

## Ejemplos

```ecmascript 6
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Ruta del archivo HTML
  const filePath = './index.html';
  // Lectura del archivo HTML
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error interno del servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('Servidor en ejecución en el puerto 8080');
});
```

- [Volver a Modulos Core](../Core.md)
- [Volver al indice](../../../README.md)