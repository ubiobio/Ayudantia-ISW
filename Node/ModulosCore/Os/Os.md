## Modulo Os

- Este modulo proporciona una API para interactuar con el sistema operativo.
- Permite obtener información del sistema, como la cantidad de memoria disponible, la carga del sistema, el tipo de plataforma, etc.

```ecmascript 6
const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());

```


- [Volver a Modulos Core](../Core.md)
- [Volver al indice](../../../README.md)