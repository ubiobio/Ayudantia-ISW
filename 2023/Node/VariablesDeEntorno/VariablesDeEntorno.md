## Variables de entorno

- En Node.js, una variable de entorno es una variable que se establece fuera de la aplicación Node.js, en el entorno en el que se está ejecutando la aplicación.
- Las variables de entorno se utilizan comúnmente para almacenar información de configuración que la aplicación puede utilizar para personalizar su comportamiento en función del entorno en el que se está ejecutando.

### Uso y ejemplo:

    1. Crea un archivo '.env' en la raiz de tu proyecto 
       (La raiz del proyecto es el punto de entrada de tu app, suele ser el index.js)

    2. Define las variables de entorno a utilizar:
        
        HOST=localhost
        USER=admin
        PASSWORD=12345

    3. Instala el paquete dotenv en tu proyecto mediante el comando npm install dotenv.

        npm install dotenv

    4. En el archivo donde deseas utilizar las variables de entorno, importa el paquete dotenv, en tu index.js mediante el siguiente código:
        
        require('dotenv').config();

    5. Ahora puedes acceder a las variables de entorno definidas en el archivo .env mediante el objeto process.env. en tu index.js

        const host = process.env.HOST;
        const user = process.env.USER;
        const password = process.env.PASSWORD;

- [Documentacion de dotenv](https://www.npmjs.com/package/dotenv)
- [Ver Ejemplo](./Ejemplo/index.js)
- [Volver al indice](../../README.md)

   
