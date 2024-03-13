
## Callbacks

Una función `callback` es aquella que es pasada como argumento a otra función para que sea “llamada de nuevo” en un momento posterior. Los callbacks son comúnmente utilizados para manejar operaciones asíncronas, como la lectura de archivos, solicitudes de red o eventos de temporización.

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

### Seguimiento del ejemplo

1. Se crea una función llamada `ejecutarDespuesDeDosSegundos` que toma un callback como argumento.
2. Dentro de esta función, se utiliza una nueva función llamada `setTimeout`  que cumple con esperar 2 segundos para ejecutar nuestra `callback` .
3. Fuera de la función `ejecutarDespuesDeDosSegundos` , se crea una nueva función llamada `miCallback` . Esta función lo que hace es imprimir un mensaje por consola cuando se invoca.
4. Volviendo a la función `ejecutarDespuesDeDosSegundos` , se invoca dentro de la función `setTimeout` nuestra función `miCallback` y se ejecuta una vez pasan 2 segundos.
5. Finalmente se invoca la función principal `ejecutarDespuesDeDosSegundos` y se pasa como argumento nuestra función `miCallback` , esto con el motivo de su ejecución.