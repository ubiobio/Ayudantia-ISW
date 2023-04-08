## Coneccion a la base de datos

- En esta sección vamos a ver como conectarnos a una base de datos desde Node.
- Para esto vamos a usar el paquete [mongoose](https://mongoosejs.com/).
- Para instalarlo debemos ejecutar el siguiente comando en la terminal:
    - `npm install mongoose`
- Ahora vamos a crear un archivo llamado `db.js` en la carpeta `src/services/db` y vamos a escribir el siguiente código:
- `db.js`
```js
const mongoose = require('mongoose');
const { configEnv } = require('../../config/env/config');
const env = configEnv();

const setUpServer = (server) => {
  try {
    mongoose
            .connect(env.URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            })
            .then(() =>
                    server.listen(env.PORT, () =>
                            console.log(`Server Running on Port: http://localhost:${env.PORT}`)
                    )
            )
            .catch((error) => console.log(`${error} did not connect`));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { setUpServer };
```
- Ahora en nuetro `index.js` de la raiz de nuestro proyecto vamos a importar el archivo `db.js` y vamos a llamar a la función `setUpServer` pasandole como parámetro el servidor que creamos anteriormente:

```js
const { setUpServer } = require('./services/db/db');

setUpServer(server);
```


- [Volver al BackEnd](./Backend.md)
- [Volver al inicio](../../README.md)