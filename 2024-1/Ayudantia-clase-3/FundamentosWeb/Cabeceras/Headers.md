> [!NOTE]
> Si quieres saber más sobre las cabeceras HTTP no dudes en visitar la [documentación oficial de la web!](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)

## Cabecera HTTP

Las cabeceras HTTP permite al cliente y al servidor enviar información adicional junto a una petición o respuesta. Una cabecera de petición esta compuesta por su nombre (no sensible a las mayúsculas) seguido de dos puntos : , y a continuación su valor (sin saltos de línea). Los espacios en blanco a la izquierda del valor son ignorados. 

### Algunas categorías que vamos a utilizar en algunas clases

#### Autenticación

En esta categoría utilizaremos la cabecera:

- `Authorization` : Proporciona el método de autenticación que debería ser usado para tener acceso al contenido de algún recurso.

#### Gestión de conexiones

En esta categoría utilizaremos la cabecera:

- `Connection` : Controla si la conexión a la red se mantiene activa después de que la transacción en curso haya finalizado.

#### Negociación de contenido

En esta categoría utilizaremos las cabeceras:

- `Accept` : Informa al servidor sobre los diferentes tipos de datos que pueden enviarse de vuelta. Es de tipo MIME.
- `Accept-Encoding` : Informa al servidor sobre el algoritmo de codificación, que puede utilizarse sobre el recurso que se envíe de vuelta en la respuesta.

#### Cookies

En esta categoría utilizaremos la cabecera:

- `Cookie` : Contiene [HTTP cookies](https://developer.mozilla.org/es/docs/Web/HTTP/Cookies) enviada previamente por el servidor con la cabecera `Set-Cookie`.

#### Mensajes sobre la información del cuerpo (body)

En esta categoría utilizaremos las cabeceras:

- `Content-Length` : Indica el tamaño del cuerpo del recurso, expresado en números decimales de octetos, que ha sido enviado al recipiente.
- `Content-Type` : Indica el tipo de medio del recurso.

#### Contexto de petición

En esta categoría utilizaremos la cabecera:

- `Host` : Especifica el nombre de dominio del servidor (para alojamiento virtual), y (opcionalmente) el número de puerto TCP en el que está escuchando el servidor.
- `User-Agent` : Contiene un string característico que será examinado por el protocolo de red para identificar el tipo de aplicación, sistema operativo, proveedor de software o versión del software del agente de software que realiza la petición.

#### Otros

`Date` : Contiene la fecha y la hora en que el mensaje fue originado.