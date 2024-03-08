
## Métodos de los Arrays

### Método push()

Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

```js
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]
```

### Método pop()

Elimina el último elemento de un array y lo devuelve.

```js
let arr = [1, 2, 3];
let removedElement = arr.pop();
console.log(removedElement); // Output: 3
console.log(arr); // Output: [1, 2]
```

### Método shift()

Elimina el primer elemento de un array y lo devuelve.

```js
let arr = [1, 2, 3];
let removedElement = arr.shift();
console.log(removedElement); // Output: 1
console.log(arr); // Output: [2, 3]
```

### Método unshift()

Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.

```js
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3]
```

### Método splice()

Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

```js
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b');
console.log(arr); // Output: [1, 2, 'a', 'b', 5]
```

### Método slice()

Devuelve una copia superficial de una porción de un array en un nuevo array.

```js
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]
console.log(arr); // Output: [1, 2, 3, 4, 5]
```

### Método reverse()

Invierte el orden de los elementos de un array.

```js
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]
```

### Método sort()

Ordena los elementos de un array.

```js
let arr = [3, 1, 4, 1, 5, 9, 2, 6];
arr.sort();
console.log(arr); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
```

Ten en cuenta que sort() ordena los elementos como cadenas de texto por defecto. Si quieres ordenar números, necesitarás proporcionar una función de comparación.

```js
let arr = [3, 1, 4, 1, 5, 9, 2, 6];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
```

### Método fill()

Llena todos los elementos de un array con un valor estático.

```js
let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); // Output: [0, 0, 0, 0, 0]
```

También puedes especificar el índice desde el que quieres empezar y el índice en el que quieres terminar.

```js
let arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr); // Output: [1, 2, 0, 0, 5]
```

### Método map()

Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.

```js
let arr = [1, 2, 3];
let newArr = arr.map(function(element) {
  return element * 2;
});
console.log(newArr); // Output: [2, 4, 6]
```

### Método filter()

Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

```js
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter(function(element) {
  return element % 2 === 0;
});
console.log(filteredArr); // Output: [2, 4]
```

### Método reduce()

Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.

```js
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15
```

### Método forEach()

Ejecuta una función proporcionada una vez por cada elemento en el array.

```js
let arr = [1, 2, 3];
arr.forEach(function(element) {
  console.log(element);
});
// Salida:
// 1
// 2
// 3
```