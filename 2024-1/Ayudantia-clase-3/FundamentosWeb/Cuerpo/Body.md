
## Cuerpo (Body)

- Cuerpo o body se refiere a la parte de una solicitud HTTP que contiene los datos que el cliente envía al servidor.
- El cuerpo de una solicitud puede contener diferentes tipos de datos, dependiendo del propósito de la solicitud.
- Existe dos categorías principales de cuerpos de solicitud:
    1. Cuerpos con un único dato: Estos cuerpos consisten en un único archivo de datos definido por las cabeceras `Content-Type`  y `Content-Length` . En este caso, el tipo de contenido y la longitud del cuerpo se especifican en las cabeceras de la solicitud.
    2. Cuerpos con múltiples datos: Estos cuerpos están formados por distintos contenidos, y normalmente están asociados con formularios HTML que pueden contener múltiples campos de entrada. En este caso, se pueden enviar varios conjuntos de datos en un solo cuerpo de solicitud.

### Diferentes formas de enviar datos en el cuerpo de una solicitud HTPP

- `multipar/form-data` : Este tipo de contenido se utiliza comúnmente para enviar formularios que contiene archivos adjuntos, como imágenes o archivos de audio, junto con otros datos de formulario. Permite la transmisión de múltiples partes de datos con diferentes tipos de contenido en una única solicitud HTTP.
- `text/plain` : Este tipo de contenido simplemente transmite datos de texto sin ningún formato especial. Es útil cuando se envían datos simples que no requieren ningún formato específico, como texto sin formato o datos de cadenas de caracteres.
- `application/json` : Este tipo de contenido se utiliza para enviar datos estructurados en formato JSON (JavaScript Object Notation).

### Diccionario

- **JSON (JavaScript Object Notation)**: Es un formato de texto ligero para intercambio de datos. Es fácil de leer y escribir para las personas y fácil de analizar y generar para las máquinas.
- **XML (Extensible Markup Language)**: Es un lenguaje de marcado que define un conjunto de reglas para codificar documentos de forma que sean legibles para humanos y máquinas.