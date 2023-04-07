## Callbacks

- Los callbacks son funciones que se pasan como argumentos a otras funciones.
- Los callbacks son funciones que se ejecutan cuando un evento sucede.

### Ejemplo Sincrono

```js
// Definición de la función 'saludar'
function saludar(nombre, miCallback) {
    // Se imprime un mensaje de saludo en la consola
    console.log(`Hola ${nombre}`);
    // Se llama a la función 'miCallback' y se le pasa el nombre como argumento
    miCallback(nombre);
}

// Definición de la función 'despedir'
function despedir(nombre) {
    // Se imprime un mensaje de despedida en la consola
    console.log(`Adios ${nombre}`);
}

// Llamada a la función 'saludar', pasando como argumentos el nombre 'Camilo' y la función 'despedir'
saludar("Camilo", despedir);

```

### Ejemplo Asincrono

```js
// Definición de la función 'saludar'
function saludar(nombre, miCallback) {
    // Se imprime un mensaje de saludo en la consola
    console.log(`Hola ${nombre}`);
    // Se utiliza la función 'setTimeout' para retrasar la llamada a 'miCallback'
    // durante 1500 milisegundos (1.5 segundos)
    setTimeout(() => {
        // Se llama a la función 'miCallback' y se le pasa el nombre como argumento
        miCallback(nombre);
    }, 1500);
}

// Definición de la función 'despedir'
function despedir(nombre) {
    // Se imprime un mensaje de despedida en la consola
    console.log(`Adios ${nombre}`);
}

// Llamada a la función 'saludar', pasando como argumentos el nombre 'Camilo' y la función 'despedir'
// 'despedir' se ejecutará después de 1.5 segundos
saludar("Camilo", despedir);

```

- [Volver a Asincronia](../Asincronia.md)
- [Volver al indice](../../../README.md)