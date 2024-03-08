
## Estructuras de Controll

### Condicionales

- `if`:

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
}
```

- `if-else` :

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `if-else if-else` :

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `switch` :

```js
switch (expresion) {
  case valor1:
    // Codigo a ejecutar si la expresion es igual a valor1
    break;
  case valor2:
    // Codigo a ejecutar si la expresion es igual a valor2
    break;
  default:
    // Codigo a ejecutar si la expresion no es igual a ninguno de los valores anteriores
}
```

### Ciclos

- `for`: Ejecuta el código un número determinada de veces.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
}
```

Ejemplo:

```js
// Imprime los numeros del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- `while`: Ejecuta el código mientras la condición sea verdadera.

```js
while (condicion) {
  // Codigo a ejecutar
}
```

Ejemplo:

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

- `do-while`: Es similar a `while`, pero la confición se evalúa al final del bucle.
    
```js
do {
  // Codigo a ejecutar
} while (condicion);
```

- `for-in`: Recorre las propiedades de un objeto.

```js
for (variable in objeto) {
  // Codigo a ejecutar
}
```

- `for-of`: Recorre los valores de un objeto iterable.

```js
for (variable of objeto) {
  // Codigo a ejecutar
}
```

- `break`: Termina el bucle actual.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    break;
  }
}
```

- `continue`: Termina la iteración actual y continua con la siguiente.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    continue;
  }
}
```