## Modulo FS

- Este modulo proporciona una API para interactuar con el sistema de archivos del sistema operativo.
- Permite crear, leer, escribir, actualizar y eliminar archivos y directorios.

## Ejemplos

```ecmascript 6
const fs = require('fs');
const path = require('path');

//Crear un directorio
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Directorio creado...');
});

//Crear y escribir en un archivo
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  (err) => {
    if (err) throw err;
    console.log('Archivo creado...');

    //Añadir contenido a un archivo
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' I love Node.js',
      (err) => {
        if (err) throw err;
        console.log('Contenido añadido...');
      }
    );
  } //Fin de la funcion callback de fs.writeFile
); //Fin de la funcion fs.writeFile

//Leer un archivo
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); //Fin de la funcion fs.readFile

//Renombrar un archivo
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err) => {
    if (err) throw err;
    console.log('Archivo renombrado...');
  }
); //Fin de la funcion fs.rename

//Eliminar un archivo
fs.unlink(path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
  if (err) throw err;
  console.log('Archivo eliminado...');
}); //Fin de la funcion fs.unlink
```


- [Volver a Modulos Core](../Core.md)
- [Volver al indice](../../../README.md)