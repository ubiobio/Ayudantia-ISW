## Path 

- Este módulo proporciona una API para trabajar con rutas de archivos y directorios.
- Permite crear, unir, resolver y normalizar rutas de archivos y directorios.

## Ejemplos
```ecmascript 6
const path = require('path');

// Crear una ruta absoluta a un archivo
//En el ejemplo anterior, se utiliza la función path.join() para crear una ruta absoluta al archivo 'archivo.txt'
// dentro de la carpeta 'carpeta' del directorio del proyecto.
//La variable __dirname es una constante global de Node.js que se refiere al directorio actual del script.
const rutaArchivo = path.join(__dirname, 'carpeta', 'archivo.txt');
console.log(rutaArchivo); // "/home/usuario/proyecto/carpeta/archivo.txt" (ejemplo en Linux)

// Normalizar una ruta
// Luego, se utiliza la función path.normalize() para normalizar la ruta especificada.
//La ruta proporcionada tiene referencias relativas como . y .. que se eliminan y se devuelve una ruta normalizada.
const rutaNormalizada = path.normalize(
  '/home/usuario/./proyecto/../proyecto/carpeta/archivo.txt'
);
console.log(rutaNormalizada); // "/home/usuario/proyecto/carpeta/archivo.txt" (ejemplo en Linux)

```


- [Volver a Modulos Core](../Core.md)
- [Volver al indice](../../../README.md)