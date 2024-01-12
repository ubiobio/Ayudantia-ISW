## Promesas

- Las promesas son un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona.
- Una promesa puede estar en uno de tres estados:
  - Pendiente
  - Completada
  - Rechazada
  
- Cuando una promesa se completa o se rechaza, se llama a la funcion que se le paso como argumento a la funcion 'then' o 'catch'.

### Ejemplo Asincrono

```js
// Creación de una nueva promesa
const miPromesa = new Promise((resolve, reject) => {
    // Simulación de una tarea asincrónica (en este caso, un retardo de 2 segundos)
    setTimeout(() => {
        const exito = true;
        if (exito) {
            // Si la tarea asincrónica fue exitosa, se resuelve la promesa
            resolve("La tarea se completó exitosamente");
        } else {
            // Si la tarea asincrónica falló, se rechaza la promesa
            reject("Hubo un error en la tarea");
        }
    }, 2000);
});

// Consumo de la promesa
miPromesa
    .then((mensaje) => {
        // Si la promesa se resolvió exitosamente, se ejecuta esta función 'then'
        console.log(mensaje);
    })
    .catch((error) => {
        // Si la promesa fue rechazada, se ejecuta esta función 'catch'
        console.error(error);
    });
```

- [Volver a Asincronia](../Asincronia.md)
- [Volver al indice](../../../README.md)