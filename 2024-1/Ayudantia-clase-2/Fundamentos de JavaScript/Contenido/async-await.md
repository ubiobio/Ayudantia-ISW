
## Async Await

En JavaScript, **`async`** y **`await`** son palabras clave que nos permiten escribir código asíncrono de una manera más limpia y legible.

- **`async`**: Es una palabra clave que se coloca antes de una función para indicar que esa función va a realizar operaciones asíncronas. Cuando una función es declarada con **`async`**, automáticamente devuelve una promesa.
- **`await`**: Se usa dentro de una función **`async`** y pausa la ejecución de la función hasta que la promesa sea resuelta. Básicamente, espera a que la promesa sea resuelta y devuelve su resultado.

### Ejemplo

```js
// Función que simula una operación asíncrona, retorna una promesa
function esperaUnSegundo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('¡Operación completada!');
      }, 1000);
    });
  }
  
  // Función asíncrona que utiliza await para pausar la ejecución hasta que la promesa sea resuelta
  async function ejecutarOperacion() {
    console.log('Inicio de la operación'); // Inicio de la operación
    
    // Utilizamos await para esperar a que la promesa sea resuelta
    const resultado = await esperaUnSegundo();
    
    // Una vez que la promesa es resuelta, continuamos con la ejecución
    console.log(resultado); // ¡Operación completada!
    
    console.log('Fin de la operación'); // Fin de la operación
  }
  
  // Llamamos a la función asíncrona
  ejecutarOperacion();
```