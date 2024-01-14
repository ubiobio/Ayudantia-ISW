
## Estructuras de Control

### Condicionales

- `if`

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
}
```

- `if-else`

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `if-else if-else`

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `switch`

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

- `for`: ejecuta el código un número determinado de veces.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
}
```

- **Inicialización**: es la expresión que se ejecuta antes de que se ejecute el bucle. Normalmente, se utiliza para declarar una variable.
- **Condición**: es la expresión que se evalúa antes de cada iteración del bucle. Si la condición es verdadera, el bucle se ejecuta. Si la condición es falsa, el bucle termina.
- **Incremento**: es la expresión que se ejecuta al final de cada iteración del bucle.
- Ejemplo:

```js
// Imprime los numeros del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- `while`: ejecuta el código mientras la condición sea verdadera.

```js
while (condicion) {
  // Codigo a ejecutar
}
```

- `do-while`: es similar a while, pero la condición se evalúa al final del bucle.

```js
do {
  // Codigo a ejecutar
} while (condicion);
```

- `for-in`: recorre las propiedades de un objeto.

```js
for (variable in objeto) {
  // Codigo a ejecutar
}
```

- `for-of`: recorre los valores de un objeto iterable.

```js
for (variable of objeto) {
  // Codigo a ejecutar
}
```

- `break`: termina el bucle.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    break;
  }
}
```

- `continue`: termina la iteración actual y continua con la siguiente.
 
```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    continue;
  }
}
```
