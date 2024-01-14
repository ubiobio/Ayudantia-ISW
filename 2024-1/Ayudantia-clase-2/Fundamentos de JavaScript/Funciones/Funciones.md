
## Funciones

- Las funciones son bloques de código que realizan una tarea específica

### Declaración de funciones

- **Función declarativa**:
    - Para declarar una función se utiliza la palabra reservada `function` seguida del nombre de la función y los parámetros entre paréntesis.
        
        ```js
            function nombreFuncion(parametro1, parametro2) {
              // Codigo a ejecutar
            }
        ```
        
    - Para llamar a una función se utiliza el nombre de la función seguido de los parámetros entre paréntesis.
        
        ```js
        nombreFuncion(parametro1, parametro2);
        ```
        
    - Ejemplo:
        
        ```js
        // La funcion saludar recibe un parametro llamado nombre
        // y muestra un mensaje en la consola
        function saludar(nombre) {
          console.log(`Hola ${nombre}`);
        }
        
        saludar("Diego");
        ```
        
- Funciones anónimas:
    - Las funciones anónimas son funciones que no tienen nombre, se utilizan para asignarlas a una variable o pasarlas como parámetro a otra función.
        
        ```js
        // La funcion saludar recibe un parametro llamado nombre
        // y muestra un mensaje en la consola
        const saludar = function(nombre) {
          console.log(`Hola ${nombre}`);
        }
        
        saludar("Diego");
        ```
        
- Funciones de flecha:
    - Las funciones de flecha son funciones anónimas que se escriben de una forma más corta.
        
        ```js
        // La funcion saludar recibe un parametro llamado nombre
        // y muestra un mensaje en la consola
        const saludar = (nombre) => {
          console.log(`Hola ${nombre}`);
        }
        
        saludar("Diego");
        ```
        
    - Si la función solo tiene un parámetro se pueden omitir los paréntesis.
        
        ```js
        // La funcion saludar recibe un parametro llamado nombre
        // y muestra un mensaje en la consola
        const saludar = nombre => {
          console.log(`Hola ${nombre}`);
        }
        
        saludar("Diego");
        ```
        
    - Si la función solo tiene una línea de código se pueden omitir las llaves y el return.
    
        ```js    
        // La funcion saludar recibe un parametro llamado nombre
        // y muestra un mensaje en la consola
        const saludar = nombre => console.log(`Hola ${nombre}`);
        ```