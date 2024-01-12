## Metodos utiles

- [Link para lista completa de metodos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)

- Para agregar un elemento al final de un array se utiliza el método **`push`**.
    - Ejemplo:
      ```javascript
      const frutas = ["Manzana", "Pera", "Uva"];
    
      frutas.push("Fresa");
      frutas.push("Mango");
    
      console.log(frutas); // ["Manzana", "Pera", "Uva", "Fresa", "Mango"]
      ```
    - Para eliminar el último elemento de un array se utiliza el método **`pop`**.
        - Ejemplo:
          ```javascript
          const frutas = ["Manzana", "Pera", "Uva"];
        
          frutas.pop();
        
          console.log(frutas); // ["Manzana", "Pera"]
          ```
    - Para agregar un elemento al inicio de un array se utiliza el método **`unshift`**.
    - Para eliminar el primer elemento de un array se utiliza el método **`shift`**.
    - Para recorrer un array se utiliza el método **`forEach`**.
        - El método **`forEach`** recibe _una función_ como parámetro. ( Callback)
        - La funcion que se pasa como parámetro al método **`forEach`** recibe 3 parámetros:
            - El elemento actual.
            - El índice del elemento actual. (Opcional)
            - El array completo. (Opcional)
        - Ejemplo:
          ```javascript
          const frutas = ["Manzana", "Pera", "Uva"];
        
          frutas.forEach(function (fruta, indice, array) {
            console.log(fruta, indice, array);
          });
          
          //En version arrow function
            frutas.forEach((fruta, indice, array) => {
                console.log(fruta, indice, array);
            });
            ```
    - Para saber si un elemento existe en un array se utiliza el método **`includes`**.
        - El método **`includes`** recibe como parámetro el elemento a buscar.
        - El método **`includes`** devuelve un valor booleano.
        - Ejemplo:
          ```javascript
          const frutas = ["Manzana", "Pera", "Uva"];
        
          console.log(frutas.includes("Manzana")); // true
          console.log(frutas.includes("Fresa")); // false
          ```
    - Para buscar el índice de un elemento en un array se utiliza el método **`indexOf`**.
        - El método **`indexOf`** recibe como parámetro el elemento a buscar.
        - El método **`indexOf`** devuelve el índice del elemento o -1 si no existe.
        - Ejemplo:
          ```javascript
          const frutas = ["Manzana", "Pera", "Uva"];
        
          console.log(frutas.indexOf("Manzana")); // 0
          console.log(frutas.indexOf("Fresa")); // -1
          ```
    - Para unir todos los elementos de un array en un string se utiliza el método **`join`**.
        - El método **`join`** recibe como parámetro el caracter con el que se unirán los elementos.
        - El método **`join`** devuelve un string.
        - Ejemplo:
          ```javascript
          const frutas = ["Manzana", "Pera", "Uva"];
        
          console.log(frutas.join()); // Manzana,Pera,Uva
          console.log(frutas.join(" - ")); // Manzana - Pera - Uva
          ```
    - Para invertir el orden de los elementos de un array se utiliza el método **`reverse`**.
        - El método **`reverse`** no recibe parámetros.
        - El método **`reverse`** modifica el array original.
        - Ejemplo:
          ```javascript
          const frutas = ["Manzana", "Pera", "Uva"];
        
          frutas.reverse();
        
          console.log(frutas); // ["Uva", "Pera", "Manzana"]
          ```
    - Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos se utiliza el método **`map`**.
        - El método **`map`** recibe como parámetro una función.
            - La función que se pasa como parámetro al método **`map`** recibe 3 parámetros:
                - El elemento actual.
                - El índice del elemento actual. (Opcional)
                - El array completo. (Opcional)
        - El método **`map`** devuelve un nuevo array.
        - Ejemplo:
          ```javascript
          const numeros = [1, 2, 3, 4, 5];
        
          const numerosDobles = numeros.map(function (numero) {
            return numero * 2;
          });
        
          console.log(numerosDobles); // [2, 4, 6, 8, 10]
          ```
    - Para filtrar elementos de un array se utiliza el método **`filter`**.
        - El método **`filter`** recibe como parámetro una función.
            - La función que se pasa como parámetro al método **`filter`** recibe 3 parámetros:
                - El elemento actual.
                - El índice del elemento actual. (Opcional)
                - El array completo. (Opcional)
        - El método **`filter`** devuelve un nuevo array.
        - Ejemplo:
          ```javascript
          const numeros = [1, 2, 3, 4, 5];
        
          const numerosPares = numeros.filter(function (numero) {
            return numero % 2 === 0;
          });
        
          console.log(numerosPares); // [2, 4]
          ```
    - Para encontrar el primer elemento que cumpla con la condición se utiliza el método **`find`**.
        - El método **`find`** recibe como parámetro una función.
            - La función que se pasa como parámetro al método **`find`** recibe 3 parámetros:
                - El elemento actual.
                - El índice del elemento actual. (Opcional)
                - El array completo. (Opcional)
        - El método **`find`** devuelve el primer elemento que cumpla con la condición o undefined si no existe.
        - Ejemplo:
          ```javascript
          const numeros = [1, 2, 3, 4, 5];
        
          const numeroMayorA2 = numeros.find(function (numero) {
            return numero > 2;
          });
        
          console.log(numeroMayorA2); // 3
          ```
    - Verificar si alguno de los elementos cumple con la condición se utiliza el método **`some`**.
        - El método **`some`** recibe como parámetro una función.
            - La función que se pasa como parámetro al método **`some`** recibe 3 parámetros:
                - El elemento actual.
                - El índice del elemento actual. (Opcional)
                - El array completo. (Opcional)
        - El método **`some`** devuelve un valor booleano.
        - Ejemplo:
          ```javascript
          const numeros = [1, 2, 3, 4, 5];
        
          const existeUnNumeroMayorA2 = numeros.some(function (numero) {
            return numero > 2;
          });
        
          console.log(existeUnNumeroMayorA2); // true
          ```


- [Volver arrays](./objetosYArrays.md#arrays)