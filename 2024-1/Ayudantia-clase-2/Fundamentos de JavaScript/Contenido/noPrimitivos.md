
## Tipos de Datos no Primitivos

Los tipos de datos no primitivos en JavaScript se caracterizan por ser valores que se pasan por referencia en lugar de por valor. Esto significa que, cuando asignas un valor no primitivo a una variable, la variable no almacena directamente el valor, sino una referencia a la ubicación en la memoria donde se encuentra el valor.

### Object

Los `objetos` en JavaScript son colecciones de pares `clase-valor`. Pueden contener propiedades y métodos, donde cada propiedad es una asociación entre un nombre (cadena) y un valor. Los objetos se utilizan para representar entidades complejas y estructuras en JavaScript.

```js
// Ejemplo de un objeto representando un estudiante
let estudiante = {
  nombre: "Diego",
  edad: 20,
  carrera: "Ingeniería de ejecución en computación e informática",
  universidad: "Universidad del Bío-Bío"
};

console.log(estudiante) 
/* Output: 
{ nombre: 'Diego', 
  edad: 20, 
  carrera: 'Ingeniería de ejecución en computación e informática', 
  universidad: 'Universidad del Bío-Bío' 
}
*/
console.log(estudiante.nombre); // Output: Diego
console.log(estudiante.edad); // Output: 20
console.log(estudiante.carrera); // Output: Ingeniería de ejecución en computación e informática
console.log(estudiante.universidad); // Output: Universidad del Bío-Bío
console.log(typeof estudiante); // Output: object
```

### Array

Los `arrays` en JavaScript son objetos especiales que almacenan una lista ordenada de elementos. Pueden contener valores de cualquier tipos de datos, incluyendo otros arrays u objetos. Los arrays se utilizan para almacenar colecciones de datos relacionados.

```js
let numeros = [1, 2, 3, 4, 5];

console.log(numeros[2]); // Output: 3
console.log(typeof numeros); // Output: object 
console.log(numeros instanceof Array); // Output: true 
```

- El `console.log(typeof numeros);` devuelve `object` porque en JavaScript, los arreglos son considerados objetos.
- El `console.log(numeros instanceof Array);` devuelve `true` porque la variable `numeros` es un arreglo. El `instanceof` se utiliza para comprobar si un objeto pertenece a una determinada clase o tipo.

### Function

Las funciones en JavaScript son objetos especiales que puede ser llamados para realizar una tarea específica o para calcular un valor. Pueden aceptar parámetros y devolver un resultado. Las funciones se utilizan para modularizar y reutilizar código.

```js
// Ejemplo de una función que suma dos números
function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 5)); // Output: 8
console.log(typeof sumar); // Output: function
```

### Date

El objeto Date en JavaScript se utiliza para trabajar con fechas y horas. Permite la creación, manipulación y formateo de fechas y horas.

```js
// Ejemplo de creación de un objeto Date
let fechaActual = new Date();

console.log(fechaActual); // Output: 2024-03-05T00:14:33.114Z
```

### RegExp

Los objetos `Regexp` en JavaScript se utilizan para trabajar con expresiones regulares, que son patrones utilizados para hacer coincidir combinaciones de caracteres en cadenas de texto.

```js
// Ejemplo de creación de una expresión regular para validar correos electrónicos
let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

console.log(expresionRegular.test("diego@gmail.com")); // Output: true
```

Esta expresión regular se utiliza para validar direcciones de correo electrónico.

- `^`: Este símbolo denota el comienzo de la cadena.
- `[^\s@]+`: Este grupo busca uno o más caracteres que no sean espacios en blanco (\s) ni el símbolo "@".
- `@`: Este símbolo representa el carácter "@".
- `[^\s@]+`: Este grupo busca uno o más caracteres que no sean espacios en blanco (\s) ni el símbolo "@".
- `\.`: Este es el punto literal ".". Se debe utilizar \ para escaparlo ya que en las expresiones regulares el punto se interpreta como "cualquier carácter".
- `[^\s@]+`: Este grupo busca uno o más caracteres que no sean espacios en blanco (\s) ni el símbolo "@".
- `$`: Este símbolo denota el final de la cadena.