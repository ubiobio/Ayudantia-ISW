## Modulo Url
- Este modulo proporciona una API para trabajar con URLs.
- Permite crear, analizar y transformar URLs.

## Ejemplos

```ecmascript 6
const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// URL Serializada
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Busqueda Serializada
console.log(myUrl.search);

// Objetos de busqueda
console.log(myUrl.searchParams);

// Agregar parametros
myUrl.searchParams.append('abc', '123');

console.log(myUrl.searchParams);

// Iterar sobre los parametros
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
```

- [Volver a Modulos Core](../Core.md)
- [Volver al indice](../../../README.md)