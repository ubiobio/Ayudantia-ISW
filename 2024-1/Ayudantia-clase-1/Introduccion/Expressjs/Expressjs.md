
## ExpressJS

Express.js es un framework utilizado con Node.js que facilita la creación de aplicaciones web y APIs. Proporciona una serie de características y funcionalidades que permiten construir aplicaciones de manera eficiente y rápida. 

- Documentación oficial de Express.js: https://expressjs.com/
- [Código ejemplo de implementación Express.js básica.](./Codigo/)


Aquí hay algunas cosas que puedes hacer con Express.js:

1. Creación de Aplicaciones Web:
    - Puedes construir aplicaciones web completas utilizando Express.js para manejar las rutas, renderizar vistas y gestionar la lógica del servidor
2. Desarrollo de APIs RESTful:
    - Express.js es muy utiizadp para construir APIs RESTful que pueden ser consumidas por aplicaciones front-end, móviles u otros servicios.
3. Manejo de Rutas:
    - Express facilita la definición de rutas para diferentes recursos dentro de tu aplicación. Puedes manejar solicitudes HTTP GET, POST, PUT, PATCH, DELETE y otros métodos.
4. Middleware:
    - Express utiliza el concepto de middleware, lo que significa que puedes ejecutar funciones en el flujo de la solicitud antes de que llegue a la ruta final. Esto es útil para la autenticación, manejo de errores, registro, entre otros.
5. Plantillas de Vistas:
    - Express puede integrarse como motores de plantillas como EJS, Pug (antes llamado Jade), Handlebars, etc., para renderizar vistas del lado del servidor.
6. Manejo de Archivos Estáticos:
    - Puedes servir archivos estáticos (CSS, imágenes, JavaScript) de manera sencilla utilizando Express.
7. Integración de Bases de Datos:
    - Express no impone una base de datos específica, por lo que puedes integrar fácilmente bases de datos como MongoDB, MySQL, PostgreSQL, entre otras.
8. Sesiones y Cookies:
    - Express proporciona soporte para manejar sesiones y cookies, lo que es esencial para muchas aplicaciones web.
9. Middleware de Terceros:
    - Puedes usar middleware de terceros para agregar funcionalidades adicionales a tu aplicación, como autenticación con Passport, compresión con Gzip, entre otros.
10. Seguridad:
    - Express incluye características de seguridad integradas, pero también puedes agregar middleware adicional para mejorar la seguridad de tu aplicación.
11. WebSockets:
    - Aunque Express no tiene soporte nativo para WebSockets, puedes integrar fácilmente bibliotecas como Socket.io para habilitar comunicación en tiempo real.
12. Pruebas Unitarias e integración:
    - Express.js facilita las pruebas unitarias e integración de tu aplicación mediante la creación de rutas y controladores de manera modular.


#### Instalación de Express.js con npm para nuestro proyecto!

1. Instala Node.js y npm
    - Antes de instalar Express.js, asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde https://nodejs.org/. Idealmente descargar la versión LTS de Node.js
2. Crea un Proyecto de Node.js
    -  Abre tu terminal
    - Crea un nuevo directorio para tu proyecto y navega a él:
    ```
    mkdir ejemplo-express
    cd ejemplo-express
    ```
3. Inicializa el Proyecto con 'npm init'
    - Ejecuta el siguiente comando y sigue las intrucciones para crear un archivo 'package.json'. Puedes presionar "Enter" para aceptar los valores predeterminados o proporcionar la información que desees.
    - El comando 'npm init -y' significa que la inicialización de proyecto no te dara instrucciones, si no que se creara con valores predeterminados.
    ```
    npm init -y 
    ```
4. Instala Express.js
    - Ejecuta el siguiente comando para instalar Express.js en tu proyecto:
    ```
    npm install express
    ```
    - Esto descargará e instalará Express.js y todas sus dependencias en tu proyecto.
5. Crea una Aplicación Express.js Simple
    - Crea un archivo llamado 'index.js' o 'server.js' en tu directorio del proyecto. Abre el archivo en tu Visual Studio Code y agrega el siguiente código para crear una aplicación Express.js simple:
    ```
    const express = require('express');
    const app = express();
    const port = 3000;
    
    app.get('/', (req, res) => {
      res.send('Hola a todos los de la ayudantia');
    });
    
    app.listen(port, () => {
      console.log(`La aplicación está escuchando en http://localhost:${port}`);
    });
    ```
    - Este código crea una aplicación Express.js que responde con "Hola a todos los de la ayudantia" cuado accedes a la ruta principal ('/').
6. Ejecuta tu Aplicación
    - En tu terminal de Visual Studio Code:
    ```
    node index.js o node server.js
    ```
    - Esto iniciará tu aplicación y la hará accesible en 'http://localhost:3000' (o el puerto que hayas especificado en tu código)