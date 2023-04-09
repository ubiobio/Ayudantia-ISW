## Estructuras de control

### Condicionales

- `if`

```javascript
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
}
```

- `if-else`

```javascript
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `if-else if-else`

```javascript
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `switch`

```javascript
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

- `for`: ejecuta el codigo un número determinado de veces.

```javascript
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
}
```

- **inicializacion**: es la expresion que se ejecuta antes de que se ejecute el bucle. Normalmente, se utiliza para declarar una variable.
- **condicion**: es la expresion que se evalua antes de cada iteracion del bucle. Si la condicion es verdadera, el bucle se ejecuta. Si la condicion es falsa, el bucle termina.
- **incremento**: es la expresion que se ejecuta al final de cada iteracion del bucle.
- Ejemplo:

```javascript
// Imprime los numeros del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```


- `while`: ejecuta el codigo mientras la condicion sea verdadera.

```javascript
while (condicion) {
  // Codigo a ejecutar
}
```

- `do-while`: es similar a while, pero la condicion se evalua al final del bucle.

```javascript
do {
  // Codigo a ejecutar
} while (condicion);
```

- `for-in`: recorre las propiedades de un objeto.

```javascript
for (variable in objeto) {
  // Codigo a ejecutar
}
```

- `for-of`: recorre los valores de un objeto iterable.

```javascript
for (variable of objeto) {
  // Codigo a ejecutar
}
```

- `break`: termina el bucle.
```javascript
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    break;
  }
}
```

- `continue`: termina la iteracion actual y continua con la siguiente.

```javascript
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    continue;
  }
}
```



- [Volver a los fundamentos](../Fundamentos.md)
- [Volver al inicio](../../../README.md)