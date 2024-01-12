## Objetos y Arrays a profundidad

### Objetos

- Los objetos son una colección de propiedades, cada propiedad tiene un nombre y un valor. **( key: value )**
- Los objetos se definen con llaves **`{ }`**.
- Las propiedades se definen con el nombre de la propiedad, dos puntos **`:`** y el valor de la propiedad.
- Los valores pueden ser de cualquier tipo, incluso otros objetos.
- Los nombres de las propiedades pueden ser cualquier string, incluso si el nombre contiene espacios se debe escribir entre comillas.
  - Ejemplo:
    ```javascript
    const persona = {
      nombre: "Camilo",
      edad: 25,
      direccion: {
        ciudad: "Concepcion",
        pais: "Chile"
      }
    };
    ```

- Para acceder a las propiedades de un objeto se utiliza el nombre del objeto seguido del nombre de la propiedad entre corchetes **[ ]**.
- Si el nombre de la propiedad es un string se puede omitir los corchetes **`[ ]`**.
- Si el nombre de la propiedad es un string que contiene espacios se debe escribir entre comillas.
- Tambien se puede acceder a las propiedades de un objeto utilizando el operador **`.`**
  - Ejemplo:
    ```javascript
    const persona = {
      nombre: "Camilo",
      edad: 25,
      direccion: {
        ciudad: "Concepcion",
        pais: "Chile"
      }
    };
    
    console.log(persona.nombre); // Camilo
    console.log(persona["nombre"]); // Camilo
    
    console.log(persona.direccion.ciudad); // Concepcion
    console.log(persona["direccion"]["ciudad"]); // Concepcion
    
    console.log(persona.direccion.pais); // Chile
    console.log(persona["direccion"]["pais"]); // Chile
    ```

### Arrays

- Los arrays son una colección de elementos.
- Los arrays se definen con corchetes **`[ ]`**.
- Los elementos se separan con comas **`,`**.
- Los elementos pueden ser de cualquier tipo, incluso otros arrays.
  - Ejemplo:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const frutas = ["Manzana", "Pera", "Uva"];
    const cosas = [1, "Camilo", true, null, undefined, { nombre: "Camilo" }, [1, 2, 3]];
    ```

- Para acceder a los elementos de un array se utiliza el nombre del array seguido del índice entre corchetes **`[indice]`**.
- _El índice de un array empieza en 0._

  - Ejemplo:

    ```javascript
    const frutas = ["Manzana", "Pera", "Uva"];
    
    console.log(frutas[0]); // Manzana
    console.log(frutas[1]); // Pera
    console.log(frutas[2]); // Uva
    ```
- **Metodos utiles**: 
  - Para saber la cantidad de elementos de un array se utiliza la propiedad **`length`**.
  - La propiedad **`length`** siempre devuelve un número entero.
    - Ejemplo:
      ```javascript
      const frutas = ["Manzana", "Pera", "Uva"];
    
      console.log(frutas.length); // 3
      ```
  - ### [Otros metodos](./Metodos.md)



- [Volver a los fundamentos](../Fundamentos.md)
- [Volver al inicio](../../../README.md)