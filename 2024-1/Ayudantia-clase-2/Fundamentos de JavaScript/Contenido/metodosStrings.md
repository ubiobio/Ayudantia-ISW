
## Métodos de Strings más utilizados

### Método length

El método length se utiliza para obtener la longitud de una cadena de texto, es decir, el número de caracteres que contiene.

```js
const saludo = 'Hola, soy Diego Salazar Jara'
console.log(saludo.length) //25
```

### Método [ ]

En JavaScript, puedes acceder a caracteres individuales de una cadena utilizando corchetes []. 

```js
let saludo = "Hola";
console.log(saludo[0]); // Esto imprimirá "H", el primer carácter de la cadena
console.log(saludo[1]); // Esto imprimirá "o", el segundo carácter de la cadena
```

### Método includes()

El método includes() se utiliza para determinar si una cadena de texto contiene ciertos caracteres. Devuelve un valor booleano, true si la cadena contiene los caracteres especificados, y false en caso contrario.

```js
let saludo = "Hola, soy Diego";
console.log(saludo.includes("Diego"));  // Esto imprimirá "true"
console.log(saludo.includes("Carlos")); // Esto imprimirá "false"
```

### Método indexOf()

El método indexOf() se utiliza para obtener el índice de la primera aparición de un carácter específico o una subcadena en una cadena de texto. Este método devuelve -1 si no se encuentra el carácter o la subcadena.

```js
let saludo = "Hola, soy Diego";
console.log(saludo.indexOf("Diego"));  // Esto imprimirá "10", que es el índice donde comienza "Diego"
console.log(saludo.indexOf("Carlos")); // Esto imprimirá "-1", porque "Carlos" no se encuentra en la cadena
```

### Método startsWith()

El método startsWith() se utiliza para determinar si una cadena de texto comienza con ciertos caracteres. Devuelve un valor booleano, true si la cadena comienza con los caracteres especificados, y false en caso contrario.

```js
let saludo = "Hola, soy Diego";
console.log(saludo.startsWith("Hola"));  // Esto imprimirá "true"
console.log(saludo.startsWith("Carlos")); // Esto imprimirá "false"
```

### Método endsWith()

El método endsWith() se utiliza para determinar si una cadena de texto termina con ciertos caracteres. Devuelve un valor booleano, true si la cadena termina con los caracteres especificados, y false en caso contrario.

```js
let saludo = "Hola, soy Diego";
console.log(saludo.endsWith("Diego"));  // Esto imprimirá "true"
console.log(saludo.endsWith("Carlos")); // Esto imprimirá "false"
```

### Método slice()

El método slice() en JavaScript se utiliza para extraer una sección de una cadena de texto y retornarla como una nueva cadena, sin modificar la cadena original. Acepta dos argumentos, que representan el índice inicial y final (no incluido) del fragmento a extraer. Si se omite el segundo argumento, slice() extraerá hasta el final de la cadena.

```js
let saludo = "Hola, soy Diego";
console.log(saludo.slice(6)); // "soy Diego"
console.log(saludo.slice(6, 9)); // "soy"
```

### Método toUpperCase()

El método toUpperCase() en JavaScript se utiliza para convertir todos los caracteres de una cadena de texto a mayúsculas. Este método no modifica la cadena original, sino que devuelve una nueva cadena con todos los caracteres en mayúsculas.

```js
let saludo = "Hola, soy Diego";
console.log(saludo.toUpperCase()); // "HOLA, SOY DIEGO"
```

### Método toLowerCase()

El método toLowerCase() en JavaScript se utiliza para convertir todos los caracteres de una cadena de texto a minúsculas. Este método no modifica la cadena original, sino que devuelve una nueva cadena con todos los caracteres en minúsculas.

```js
let saludo = "Hola, SOY Diego";
console.log(saludo.toLowerCase()); // "hola, soy diego"
```

### Método replace()

El método `replace()` en JavaScript se utiliza para reemplazar una subcadena o expresión regular especificada por una nueva cadena en la cadena original. Este método devuelve una nueva cadena con algunas o todas las coincidencias de un patrón reemplazadas por un reemplazo, y la cadena original permanece sin cambios.

Aquí hay un ejemplo de cómo se utiliza:

```js
let saludo = "Hola, soy Diego";
let nuevoSaludo = saludo.replace("Diego", "Carlos");
console.log(nuevoSaludo); // "Hola, soy Carlos"
```

En este ejemplo, la subcadena "Diego" se reemplaza por "Carlos" en la cadena "saludo". Tenga en cuenta que el método replace() solo reemplaza la primera coincidencia que encuentra. Si desea reemplazar todas las coincidencias en la cadena, tendría que utilizar una expresión regular con la bandera global g.

### Método repeat()

El método `repeat()` en JavaScript se utiliza para construir una nueva cadena que contiene un número específico de copias de la cadena original. Acepta un argumento, que es el número de veces que se debe repetir la cadena. Este método devuelve una nueva cadena y no modifica la cadena original.

Aquí hay un ejemplo de cómo se utiliza:

```js
let saludo = "Hola ";
console.log(saludo.repeat(3)); // "Hola Hola Hola "
```

En este ejemplo, la cadena "Hola " se repite tres veces para crear una nueva cadena.

### Método trim()

El método `trim()` en JavaScript se utiliza para eliminar los espacios en blanco del principio y del final de una cadena de texto. Este método no modifica la cadena original, sino que devuelve una nueva cadena sin los espacios en blanco al inicio y al final.

Aquí hay un ejemplo de cómo se utiliza:

```js
let saludo = "   Hola, soy Diego   ";
console.log(saludo.trim()); // "Hola, soy Diego"
```

En este ejemplo, la cadena "   Hola, soy Diego   " tiene espacios en blanco al principio y al final. Después de aplicar el método trim(), se obtiene una nueva cadena "Hola, soy Diego" sin los espacios en blanco al principio y al final.

### Método split()

El método `split()` en JavaScript se usa para dividir una cadena de texto en un array de subcadenas, y devuelve el nuevo array. Se emplea un especificador denominado separador para determinar dónde hacer cada división. Si se omite el separador, se devuelve un array con una sola cadena. Este método no cambia la cadena original.

Aquí hay un ejemplo de cómo se utiliza:

```js
let saludo = "Hola, soy Diego";
let palabras = saludo.split(" ");
console.log(palabras); // ["Hola,", "soy", "Diego"]
```

En este ejemplo, la cadena "Hola, soy Diego" se divide en tres subcadenas basándose en los espacios, y se guarda en el array `palabras`.