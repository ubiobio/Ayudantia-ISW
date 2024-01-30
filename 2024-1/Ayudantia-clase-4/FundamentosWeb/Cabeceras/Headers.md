
## Cabecera HTTP

Una cabecera HTTP es un campo de una solicitud o respuesta HTTP que transmite contexto y metadatos adicionales sobre la solicitud o respuesta. Por ejemplo, un mensaje de solicitud puede utilizar cabeceras para indicar sus formatos de medios preferidos, mientras que una respuesta puede utilizar cabeceras para indicar el formato de medios del cuerpo devuelto. Las cabeceras no distinguen entre mayúsculas y minúsculas, comienzan al principio de una línea y van seguidas inmediatamente por un ":" y un valor dependiente de la cabecera. El valor termina en el siguiente CRLF o al final del mensaje.

#### ¿De que forma lo queremos hacer?

Las cabeceras HTTP son parte esencial de las solicitudes y respuestas HTTP, proporcionando información clave sobre el objeto solicitado. Aquí está un resumen de su importancia:

- **Formato MIME**: Define el tipo de contenido del objeto solicitado.
- **Lengua preferida**: Indica el idioma preferido para recibir el objeto.
- **Autenticación**: Se utiliza para verificar la identidad del usuario o del servidor.
- **Control de caché**: Indica cómo debe almacenarse el contenido en caché.
- **Cookies**: Se utilizan para almacenar información del usuario.
- **CORS (Cross-Origin Resource Sharing)**: Permite o restringe recursos solicitados de un dominio diferente.
- **Accept**: Indica los tipos de medios que son aceptables para la respuesta.
- **Authorization**: Proporciona credenciales para autenticar al usuario.
- **Cache-Control**: Define cómo y por cuánto tiempo un recurso específico puede ser almacenado en caché.
- **Content-Type**: Indica el tipo de medio del contenido del recurso.
- **Content-Length**: Indica el tamaño del cuerpo de la entidad, en bytes.