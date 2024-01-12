## Arquitectura de nuestra aplicación ( basada en el template del proyecto )

### Estructura de carpetas

```bash

├── NombreProyecto
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   ├── .env
│   │   │   ├── initialSetup.js
│   │   │   ├── configDB.js
│   │   │   └── configEnv.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares
│   │   │   ├── autho.middleware.js
│   │   │   └── authe.middleware.js
│   │   ├── models
│   │   │   ├── auth.model.js
│   │   │   └── user.model.js
│   │   ├── routes
│   │   │   ├── auth.route.js
│   │   │   ├── user.route.js
│   │   │   └── index.routes.js
│   │   ├── services
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── schemas
│   │   │   └── user.schema.js    
│   │   ├── utils
│   │   │   ├── resHandler.js
│   │   │   └── errorHandler.js
│   │   └── server.js
│   ├── .eslintrc.json
│   ├── .prettierrc.json
│   ├── .gitignore
└── └── package.json
```

## Arquitectura de la aplicación:

![img_2.png](img_2.png)

- [Volver al BackEnd](./Backend.md)
- [Volver al inicio](../../README.md)
