## Funciones

- Las funciones son bloques de código que realizan una tarea específica

### Declaración de funciones

- **Funcion declarativa**:
  - Para declarar una función se utiliza la palabra reservada `function` seguida del nombre de la función y los parámetros entre paréntesis.

    ```javascript
        function nombreFuncion(parametro1, parametro2) {
          // Codigo a ejecutar
        }
    ```
  - Para llamar a una función se utiliza el nombre de la función seguido de los parámetros entre paréntesis.

    ```javascript
    nombreFuncion(parametro1, parametro2);
    ```

  - Ejemplo:

    ```javascript
    // La funcion saludar recibe un parametro llamado nombre
    // y muestra un mensaje en la consola
    function saludar(nombre) {
      console.log(`Hola ${nombre}`);
    }
    
    saludar("Camilo");
    ```
- Funciones anonimas:
  - Las funciones anonimas son funciones que no tienen nombre, se utilizan para asignarlas a una variable o pasarlas como parámetro a otra función.

    ```javascript
    // La funcion saludar recibe un parametro llamado nombre
    // y muestra un mensaje en la consola
    const saludar = function(nombre) {
      console.log(`Hola ${nombre}`);
    }
    
    saludar("Camilo");
    ```
- Funciones de flecha:
  - Las funciones de flecha son funciones anonimas que se escriben de una forma más corta.

    ```javascript
    // La funcion saludar recibe un parametro llamado nombre
    // y muestra un mensaje en la consola
    const saludar = (nombre) => {
      console.log(`Hola ${nombre}`);
    }
    
    saludar("Camilo");
    ```
    
  - Si la función solo tiene un parámetro se pueden omitir los paréntesis.

    ```javascript
    // La funcion saludar recibe un parametro llamado nombre
    // y muestra un mensaje en la consola
    const saludar = nombre => {
      console.log(`Hola ${nombre}`);
    }
      
    saludar("Camilo");
    ```
  - Si la función solo tiene una linea de código se pueden omitir las llaves y el return.

    ```javascript
      // La funcion saludar recibe un parametro llamado nombre
      // y muestra un mensaje en la consola
      const saludar = nombre => console.log(`Hola ${nombre}`);
    ```


- [Volver a los fundamentos](../Fundamentos.md)
- [Volver al inicio](../../../README.md)