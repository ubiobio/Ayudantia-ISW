
## Objetos

- Los objetos son una colección de varios datos y entidades más complejas asociados con un nombre clave.
- Podemos crear un objeto usando las llaves `{...}` con una lista opcional de propiedades.
- Una propiedad es un par `clave: valor` , donde `clave` es un string, y `valor` puede ser cualquier cosa, incluso otros objetos.
- Ejemplo:

```js
const persona = {
  nombre: "Diego", // String
  edad: 25, // Number
  direccion: { // Object
    ciudad: "Chiguayante", // Dentro del objeto tenemos un String
    pais: "Chile" // // Dentro del objeto tenemos un String
  }
};
```

- Para acceder a las propiedades de un objeto se utiliza el nombre del objeto seguido del nombre de la propiedad entre corchetes `[]` .
- Ejemplo:

```js
const persona = {
  nombre: "Diego", // String
  edad: 25, // Number
  direccion: { // Object
    ciudad: "Chiguayante", // Dentro del objeto tenemos un String
    pais: "Chile" // // Dentro del objeto tenemos un String
  }
};

console.log(persona.nombre); // Diego
console.log(persona["nombre"]); // Diego

console.log(persona.direccion.ciudad); // Chiguayante
console.log(persona["direccion"]["ciudad"]); // Chiguayante

console.log(persona.direccion.pais); // Chile
console.log(persona["direccion"]["pais"]); // Chile
```