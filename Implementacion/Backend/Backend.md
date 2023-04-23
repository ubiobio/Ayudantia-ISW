## De requerimientos a código backend

En nuestro contexto de proyecto la construccion del backend es primero. Considerando esto:

1. **`Identificacion de requisitos funcionales`**.
    - Se realizan las entrevistas con los Product Owners.
    - Se identifican los requisitos funcionales.
    - Se discuten las posibles soluciones.
    - Se retroalimenta con los Product Owners.
    - Se escogen las posibles soluciones.
    - _`TIP`_: Recuerden otorgar valor con sus requisitos funcionales.
      - Sus requisitos funcionales deben ser entendibles por cualquier persona.
      - Sus requisitos funcionales deben responder a la pregunta: **Como** usuario **quiero** poder hacer algo **para** poder obtener algo.
      - Ejemplo: "_**Como** usuario **quiero** poder ver los productos que mas se venden **para** poder comprarlos._"
    ### *Las operaciones CRUD, para este proyecto y contexto NO son requisitos funcionales.*
2. **`Modelando el problema:`**
   Hay que tener encuenta que MongoDB es una base de datos NoSQL, por lo tanto no es necesario realizar un modelo relacional. 
   Sin embargo, es necesario realizar un modelo de datos para poder identificar las entidades, atributos y relaciones del problema.
   Y luego este modelo de datos hecho por nosotros se debe transformar en un modelo de datos para MongoDB.
      - Identificar las entidades del problema.
      - Identificar los atributos de las entidades.
      - Identificar las relaciones entre las entidades.
      - Identificar los atributos de las relaciones.

3. **`Transformacion de modelo a MongoDB`**

   - Para transformar nuestro modelo de datos a MongoDB, en Node, utilizaremos el paquete [Mongoose](https://mongoosejs.com/).
   - Mongoose nos permite definir un _**esquema**_ para cada entidad de nuestro modelo de datos.
   - Mongoose nos permite definir relaciones entre entidades.
   - Mongoose nos permite definir validaciones para cada atributo de cada entidad.
   
4. **`Creacion de las rutas:`** 

   - Para crear las rutas utilizaremos el paquete [Express](https://expressjs.com/).
   - Express nos permite definir rutas para cada operacion CRUD.
   - Express nos permite definir controladores para cada ruta.
   - Express nos permite definir validaciones para cada ruta.

____
- [Volver atras](../ReqToCode.md)
