## Variables, tipos de datos y operadores

### Variables

Una variable es un espacio de memoria que almacena un valor. En JavaScript, las variables se declaran con la palabra reservada `var`, `let` o `const`.

```js
var nombre = "Camilo";
let apellido = "Saez";
const edad = 22;
```

- `var` es una palabra reservada que indica que se va a declarar una variable.
- `nombre` es el nombre de la variable.
- `=` es el operador de asignación.
- `"Camilo"` es el valor que se le asigna a la variable.

#### Recomendacion: 

- Usar `let` en lugar de `var` para declarar variables.
- Usar `const` para declarar variables que no van a cambiar de valor.
- Usar nombres descriptivos para las variables.
- Usar nombres en mayusculas para las constantes.
- Usar nombres en minusculas para las variables.
- Usar nombres en inglés para las variables.
- Usar nombres en camelCase para las variables,
se remplaza el espacio por la siguiente letra en mayuscula, Ejemplo: "nombre completo" => `nombreCompleto`.

### Tipos de datos

- Tipos de datos primitivos:
  - Son valores más basicos y simples que se pueden asignar a una variable
  - _**Son datos que se pasan por valor.**_
  - Existen metodos integrados para realizar operaciones ( Number, String, Boolean)
    - `number`: Números enteros y decimales.
    - `string`: Cadenas de texto.
    - `boolean`: Valores booleanos, `true` o `false`.
    - `null`: Valor nulo.
    - `undefined`: Valor indefinido.
    - `symbol`: Tipo de dato que se usa para identificar objetos de forma única.
  
- Tipos de datos No primitivos:
  - Son valores que se pasan por referencia.
  - Existen metodos integrados para realizar operaciones ( Object, Array, Function)
    - `object`: Tipo de dato que representa un objeto.
    - `array`: Tipo de dato que representa una lista de valores.
    - `function`: Tipo de dato que representa una función.
    - `date`: Tipo de dato que representa una fecha.
    - `regexp`: Tipo de dato que representa una expresión regular.

### Operadores

- Operadores aritméticos:
  - `+`: Suma.
  - `-`: Resta.
  - `*`: Multiplicación.
  - `/`: División.
  - `%`: Módulo.
  - `++`: Incremento.
  - `--`: Decremento.
  - `**`: Exponente.
- Operadores de asignación:
  - `=`: Asignación.
  - `+=`: Asignación de suma.
  - `-=`: Asignación de resta.
  - `*=`: Asignación de multiplicación.
  - `/=`: Asignación de división.
  - `%=`: Asignación de módulo.
  - `**=`: Asignación de exponente.
- Operadores de comparación:
  - `==`: Igual a.
  - `===`: Estrictamente igual a.
  - `!=`: Diferente a.
  - `!==`: Estrictamente diferente a.
  - `>`: Mayor que.
  - `<`: Menor que.
  - `>=`: Mayor o igual que.
  - `<=`: Menor o igual que.
- Operadores lógicos:
  - `&&`: AND.
  - `||`: OR.
  - `!`: NOT.


- [Volver a los fundamentos](../Fundamentos.md)
- [Volver al inicio](../../../README.md)
