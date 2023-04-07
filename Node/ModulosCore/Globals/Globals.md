## Modulos globales

- En Node.js, existen algunos módulos que se pueden utilizar en cualquier archivo JavaScript sin necesidad de importarlos, ya que están disponibles globalmente en todo el entorno.

| Módulo global                | Descripción                                                                                                              |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `console`                    | Proporciona una manera de enviar mensajes a la consola de depuración en Node.js.                                         |
| `process`                    | Proporciona información y control sobre el proceso en ejecución de Node.js.                                              |
| `setTimeout` y `setInterval` | Funciones globales que se utilizan para ejecutar código después de un cierto período de tiempo o a intervalos regulares. |
| `__dirname`                  | Variable global que contiene el directorio del archivo actual.                                                           |
| `__filename`                 | Variable global que contiene la ruta del archivo actual.                                                                 |
| `require`                    | Función global que se utiliza para importar módulos en un archivo JavaScript.                                            |
| `module`                     | Objeto global que contiene información sobre el módulo actual.                                                           |

## Ejemplos

```ecmascript 6
// ! Console

console.log('Hola Mundo'); // Imprime en consola
console.warn('Advertencia'); // Imprime en consola con color amarillo
console.error('Error'); // Imprime en consola con color rojo
console.table(['Hola', 'Mundo']); // Imprime en consola una tabla

// ! process

process.pid // Imprime el id del proceso
process.versions.node // Imprime la version de node
process.env // Imprime las variables de entorno

// ! setTimeout y setInterval

setTimeout(() => {
    console.log('Hola Mundo');
}
, 3000); // Imprime en consola 'Hola Mundo' cada 3 segundos

setInterval(() => {
    console.log('Hola Mundo');
}
, 3000); // Imprime en consola 'Hola Mundo' cada 3 segundos

// ! _Dirname y _Filename

console.log(__dirname); // Imprime la ruta del directorio
console.log(__filename); // Imprime la ruta del archivo

// ! require

// CommonJS: 
const modulo = require('./modulo'); // Importa el modulo

//! module

// ES6: 
import module from 'module' // Exporta el modulo
```

- [Volver a Modulos Core](../Core.md)
- [Volver al indice](../../../README.md)