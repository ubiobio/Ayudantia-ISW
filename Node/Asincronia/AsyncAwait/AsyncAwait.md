## Async Await

- Los Async Await son una forma de escribir codigo asincrono de forma mas legible y sencilla.
-  Con async/await, podemos escribir código asíncrono que se parece al código síncrono y es más fácil de leer y entender.

## Ejemplo Asincrono

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

// Consumo de la promesa con async/await
async function consumirPromesa() {
    try {
        const mensaje = await miPromesa;
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}

consumirPromesa();
```



- [Volver a Asincronia](../Asincronia.md)
- [Volver al indice](../../../README.md)