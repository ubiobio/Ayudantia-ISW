## NPM significa "Node Package Manager"

- Es el administrador de paquetes predeterminado para Node.js.
- Es una herramienta que facilita la instalación y gestión de paquetes de código fuente y bibliotecas de Node.js que pueden ser utilizados en proyectos

## Comandos:

| Comando                                     | README                                                                                                         | Ejemplo                 |
|---------------------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------|
| npm init                                    | Crea un archivo package.json en el directorio actual.                                                          | ------                  |
| npm install                                 | Instala todos los paquetes listados como dependencias en package.json.                                         | ------                  |
| npm install &lt;package&gt;                 | Instala un paquete específico y lo agrega a la lista de dependencias en package.json.                          | npm install axios       |
| npm install &lt;package&gt;@&lt;version&gt; | Instala un paquete específico y una versión específica y lo agrega a la lista de dependencias en package.json. | npm install axios@0.8.0 |
| npm install &lt;package&gt; -D              | Instala un paquete específico y lo agrega a la lista de dependencias de desarrollo en package.json.            | npm install -D dotenv   |
| npm install &lt;package&gt; -g              | Instala un paquete específico de forma global en su sistema.                                                   | npm install -g nodemon  |

 - [Volver al indice](../../README.md)