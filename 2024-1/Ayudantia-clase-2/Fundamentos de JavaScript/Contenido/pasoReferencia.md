
## Paso por referencia

En JavaScript, paso por referencia significa que cuando pasas un objeto (como un array o un objeto literal) como argumento a una función, estás pasando una referencia a ese objeto en lugar de una copia del objeto en sí. Esto significa que cualquier cambio que se haga dentro de la función al objeto también afectará al objeto original fuera de la función.

### Ejemplo 1

```js
let panes = ['🥐']
let pancitos = panes // Se crea una copia de panes, entonces pancitos y panes apuntan a la misma dirección de memoria.

console.log(panes) // ['🥐']
console.log(pancitos) // ['🥐']
```

| Variables  | Valores | Dirección en memoria | Objeto |
| ---------- | ------- | -------------------- | -----  |
| panes      | ['🥐']  | #001                 | ['🥐'] |
| pancitos   | ['🥐']  | #001                 | ['🥐'] |

Las dos variables apuntan a la misma dirección, en este caso `pancito`  se le pasa `panes` , esto significa que pancitos apunta a panes, lo que quiere decir que la dirección de pancitos y panes tendrán la misma dirección, que es #001.

Ahora modifiquemos el primer array agregándole otro elemento:

```js	
let panes = ['🥐']
let pancitos = panes
pancitos.push('🥖') // Agregamos otro elemento
panes.push('🍞') // Agregamos otro elemento
console.log('Array panes: ',panes) // Array panes: ['🥐', '🥖', '🍞']
console.log('Array pancitos: ',pancitos) // Array pancitos: ['🥐', '🥖', '🍞']
```

| Variables  | Valores | Dirección en memoria | Objeto |
| ---------- | ------- | -------------------- | -----  |
| panes      | <#001>  | #001                 | ['🥐', '🥖', '🍞'] |
| pancitos   | <#001>  | #001                 | ['🥐', '🥖', '🍞'] |

