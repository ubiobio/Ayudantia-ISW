## NPM significa "Node Package Manager"

- Es el administrador de paquetes predeterminado para Node.js.
- Es una herramienta que facilita la instalación y gestión de paquetes de código fuente y bibliotecas de Node.js que pueden ser utilizados en proyectos

## Comandos:

| Comando                         | Definicion                                                                                                     | Ejemplo                 |
|---------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------|
| `npm init `                     | Crea un archivo package.json en el directorio actual.                                                          | ------                  |
| `npm install`                   | Instala todos los paquetes listados como dependencias en package.json.                                         | ------                  |
| `npm install <package>`         | Instala un paquete específico y lo agrega a la lista de dependencias en package.json.                          | npm install axios       |
| `npm install <package@version>` | Instala un paquete específico y una versión específica y lo agrega a la lista de dependencias en package.json. | npm install axios@0.8.0 |
| `npm install <package> -D`      | Instala un paquete específico y lo agrega a la lista de dependencias de desarrollo en package.json.            | npm install -D dotenv   |
| `npm install <package> -g`      | Instala un paquete específico de forma global en su sistema.                                                   | npm install -g nodemon  |

 - [Volver al indice](../../README.md)