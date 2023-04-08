## Configuración de entorno

- En esta sección vamos a ver como configurar las variables de entorno de nuestra aplicación.
- Para esto vamos a usar el paquete [dotenv](https://www.npmjs.com/package/dotenv).
- Para instalarlo debemos ejecutar el siguiente comando en la terminal:
    - `npm install dotenv`
- Ahora vamos a crear un archivo llamado `.env` en la carpeta `src/config/env` y vamos a escribir el siguiente código:
- `.env`
    ```env
    PORT=3000
    HOST=localhost
    URI=<MongoDB_URI>
    ```
- Ahora vamos a crear un archivo llamado `config.js` en la carpeta `src/config/env` y vamos a escribir el siguiente código:
```js
const path = require('path');

const configEnv = () => {
    const envFilePath = path.resolve(__dirname, `.env`);
    require('dotenv').config({ path: envFilePath });
    return {
        PORT: process.env.PORT,
        HOST: process.env.HOST,
        URI: process.env.URI,
    };
};

module.exports = { configEnv };
```

- [Volver al BackEnd](./Backend.md)
- [Volver al inicio](../../README.md)