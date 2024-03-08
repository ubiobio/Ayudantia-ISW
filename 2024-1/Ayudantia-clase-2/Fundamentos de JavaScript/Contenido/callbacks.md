
## Callbacks

Un callback en JavaScript es una función que se pasa como argumento a otra función y se invoca después de que la función principal ha completado su tarea. Los callbacks son comúnmente utilizados para manejar operaciones asíncronas, como la lectura de archivos, solicitudes de red o eventos de temporización.

### Ejemplo

```js
// Definimos una función principal que toma un callback como argumento
function ejecutarDespuesDeDosSegundos(callback) {
  setTimeout(function() {
    // Llamamos al callback después de dos segundos
    callback();
  }, 2000); // 2000 milisegundos = 2 segundos
}

// Definimos una función de callback simple
function miCallback() {
  console.log('El callback se ha ejecutado después de dos segundos');
}

// Llamamos a la función principal y pasamos el callback como argumento
ejecutarDespuesDeDosSegundos(miCallback);
```

En este ejemplo, tenemos una función **`ejecutarDespuesDeDosSegundos`** que toma un callback como argumento. Dentro de esta función, se utiliza **`setTimeout`** para simular una operación asíncrona que toma dos segundos en completarse. Después de dos segundos, se llama al callback pasado como argumento.

Luego, definimos una función de callback simple llamada **`miCallback`**, que simplemente imprime un mensaje en la consola. Finalmente, llamamos a **`ejecutarDespuesDeDosSegundos`** y pasamos **`miCallback`** como argumento. Después de dos segundos, el callback se ejecuta y vemos el mensaje en la consola.