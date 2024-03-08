
## Objetos

### Ejercicios

1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

### Ejemplo

Crear un objeto llamado computador y definir sus propiedades, las cuales son:

- Teclado
- Pantalla
- Mouse
- Marca
- Enciende?
- Precio

```js
const computador = {
		teclado: "Redragon Kurama",
		mouse: "Logitech G203",
		marca: "ASUS",
		enciende: true,
		precio: 450000
}

console.log(computador); // {teclado: 'Redragon Kurama', mouse: 'Logitech G203', marca: 'ASUS', enciende: true, precio: 450000}
console.log(computador.teclado); // Redragon Kurama
console.log(computador.mouse); // Logitech G203
console.log(computador.marca); // ASUS
console.log(computador.enciende); // true
console.log(computador.precio); // 450000
console.log(typeof computador); // object
console.log(typeof computador.teclado); // string
console.log(typeof computador.mouse); // string
console.log(typeof computador.marca); // string
console.log(typeof computador.enciende); // boolean
console.log(typeof computador.precio); // number
```