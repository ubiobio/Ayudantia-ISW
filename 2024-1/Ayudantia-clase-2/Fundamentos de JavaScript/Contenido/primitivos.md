
## Tipos de datos primitivos

Los tipos de datos primitivos se caracterizan por ser valores más básicos y simples que se pueden asignar a una variable, esto quiere decir que son datos que se pasan por valor.

### Number

El tipo de dato `number` representa tanto números enteros como de punto flotante.

Además de los números comunes, existen los llamados valores numéricos especiales que también perteneces a este tipo de datos: `Infinity`, `-Infinity` y `NaN`.

- `Infinity`: Representa el infinito matemático `∞`.

```js
const num = 1 / 0;
console.log(num) // Infinity

const numero = Infinity;
console.log(numero); // Infinity
```

- `-Infinity`: Representa el infinito negativo `-∞`.

```js
const num = -Infinity;
console.log(num); // -Infinity
```

- `NaN`: Representa un error de cálculo.

```js
const num = "no es un numero" / 2;
console.log(num); // NaN
```

### BigInt

En JavaScript, el tipo `number` no puede representar de forma segura valores enteros mayores que `2^53-1`.

Para ser más precisos, el tipo de dato `number` puede almacenar enteros muy grandes, hasta `1.7976931348623157 * 10308`, pero fuera del rango de enteros seguros `±(253-1)` habrá un error de precisión, porque no todos los dígitos caben en el almacén fijo de 64-bit.

Por ejemplo, estos dos números (justo por encima del rango seguro) son iguales:

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

### String

Un `string` en JavaScript es una cadena de caracteres y debe colocarse entre comillas.

En JavaScript, hay 3 tipos de comillas:

1. Comillas dobles: **" "**
2. Comillas simples: **' '**
3. Comillas invertidas o Backticks: **``**

- Las comillas dobles y simples son **comillas sencillas**. No hay diferencia entre ellas en JavaScript.

- Las comillas invertidas son comillas de **funcionalidad extendida**. Nos permiten incrustar variables y expresiones en una cadea de caracteres encerrándolas en `${...}`.

### Boolean

- El tipo `boolean` tiene sólo dos valores posibles: `true` o `false`.
- Este tipo se utiliza comúnmente para almacenar valores de `sí/no`.
    - `true` significa sí, es correcto, verdadero, etc.
    - `false` significa no, incorrecto, falso, etc.

Por ejemplo:

```js
// Asignar valores booleanos a variables
let esVerdadero = true;
let esFalso = false;

// Usar valores booleanos en expresiones condicionales
if (esVerdadero) {
  console.log("Es verdadero");
} else {
  console.log("No es verdadero");
}

if (esFalso) {
  console.log("Es falso");
} else {
  console.log("No es falso");
}

// Operaciones booleanas
let resultadoAND = true && false; // AND lógico
console.log(resultadoAND); // Output: false

let resultadoOR = true || false; // OR lógico
console.log(resultadoOR); // Output: true

let resultadoNOT = !true; // NOT lógico
console.log(resultadoNOT); // Output: false
```

| Boolean | Operador lógico | Boolean | Resultado |
|---------|-----------------|---------|-----------|
|  true   |       AND       |  true   |   true    |
|  true   |       AND       |  false  |   false   |
|  false  |       AND       |  true   |   false   |
|  false  |       AND       |  false  |   false   |
|  true   |       OR        |  true   |   false   |
|  true   |       OR        |  false  |   false   |
|  false  |       OR        |  true   |   false   |
|  false  |       OR        |  false  |   false   |

### Null

- El valor especial `null` no pertenece a ninguno de los tipos descritos anteriormente.

- Forma un tipo propio separado que contiene sólo el valor `null`:
    
```js
let age = null;
```

- En JavaScript, `null` no es una referencia a **un objeto inexistente** o un **puntero nulo** como en otros lenguajes. Es sólo un **valor especial** que representa `nada, vacío o valor desconocido`.

### Undefined

El significado de `undefined` es `valor no asignado`. Si una variable es declarada, pero no asignada, entonces su valor es `undefined`:

```js
let age;

console.log(age); // undefined
```

Otro ejemplo:

```js
let age = 25;

age = undefined; // cambiamos el valor a undefined

console.log(age); //undefined
```

- No se recomienda hacer eso de cambiar un valor a `undefined`, para eso esta el `null`.

### Symbol

El tipo de dato `symbol` se usa para identificar objetos de forma única.

Ejemplo:

```js
const simbol1 = Symbol('Simbolo 1');

const simbol2 = Symbol('Simbolo 2');

console.log(simbolo1 === simbolo2); // Output: false

// Utilización de símbolos como propiedades de un objeto
const MY_KEY = Symbol();
let objeto = {};

objeto[MY_KEY] = 'Valor asignado al símbolo';

console.log(objeto[MY_KEY]); // Output: Valor asignado al símbolo
```