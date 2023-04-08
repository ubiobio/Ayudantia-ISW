## Http

### ¿Que es HTTP?

- Es el protocolo de comunicacion que permite las transferencias de informacion en la web

### ¿Por que es importante?

- Es el lenguaje en comun para todas la comunicaciones entre el cliente y el servidor.

### ¿Como funciona?

- El cliente envia una peticion al servidor
- El servidor recibe la peticion y responde con una respuesta
- El cliente recibe la respuesta y la muestra al usuario

```mermaid
Cliente --> Servidor: Peticion
Servidor --> Cliente: Respuesta
```

![img.png](img.png)

### Puntos clave:

- Metodos:
  - ¿Que quieres hacer?
    - GET: Obtener informacion
    - POST: Crear informacion
    - PUT/PATCH: Actualizar informacion
    - DELETE: Eliminar informacion
- Codigo de estado:
  - ¿Como a ido la operacion?
    - 1xx: Informacion
    - 2xx: Exito
    - 3xx: Redireccion
    - 4xx: Error del cliente
    - 5xx: Error del servidor
- Headers (Cabeceras):
  - ¿Que informacion adicional necesitas? o ¿Como quieres que se envie la informacion?
    - Cookies: Informacion que se guarda en el navegador
    - CORS: Politica de seguridad 
    - Accept: Tipo de contenido que aceptas
    - Authorization : Informacion de autenticacion
    - Caché: Informacion de la caché del navegador
    - Content-Type: Tipo de contenido
    - Content-Length: Tamaño del contenido
    - Etc...
- Body (Cuerpo):
  - ¿Que informacion quieres enviar?
    - JSON (JavaScript Object Notation)
    - XML (Extensible Markup Language)
    - Etc...
- Queries (Parametros):
  - ¿Que informacion quieres obtener?
      - ? = Inicio de la query
      - & = Separador de parametros
      - = Separador de llave y valor
      - Ejemplo: ?nombre=Juan&edad=20



- [Volver al BackEnd](./Backend.md)
- [Volver al inicio](../../README.md)