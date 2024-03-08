
## Funciones

### Anatomía de una función

Una función son porciones de código que nos permiten escribir funcionalidades para poder utilizarlas más de una vez.

![funcion.png](../../images/estructuraFuncion.png)

### Funciones declarativas

También conocidas como **funciones con nombre** o **funciones tradicionales**, se definen usando la palabra clase `function` seguida por un nombre y un cuerpo de función.

```js
function sumar(a, b) {
    return a + b;
}
```

### Expresión de función

Se definen asignando una función a una variable.

```js
const resta = function(a, b) {
    return a - b;
};
```

### Funciones flecha

Introducidas en ECMAScript 6, son una forma más concisa de escribir funciones. Se definen utilizando una sintaxis de flecha =>.

```js
const multiplicar = (a, b) => {
    return a * b;
};
```

### Funciones en objetos

Son funciones que están asociadas a objetos en JavaScript.

```js
const objeto = {
    nombre: "Juan",
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
```