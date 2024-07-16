
## Cheatsheet muy básico de CSS

### Selectores

- `*` : Selecciona todos los elementos
- `elemento` : Selecciona todos los elementos del tipo especificado (por ejemplo, `p` para todos los párrafos).
- `.clase` : Selecciona todos los elementos con la clase especificada.
- `#id` : Selecciona el elemento con el id especificado.
- `elemento1 elemento2` : Selecciona todos los `elemento2` dentro de `elemento1` .
- `elemento1, elemento2` : Selecciona todos los `elemento1`  y `elemento2` .
- `elemento:hover` : Selecciona `elemento` cuando el ratón está sobre él.

### Propiedades

- Para texto y fuentes:
    1. `color` : Color de texto (por ejemplo, `color: red;`).
    2. `font-size` : Tamaño de la fuente (por ejemplo, `font-size: 16px;`).
    3. `font-family` : Familia de la fuente (por ejemplo, `font-family: Arial, sans-serif;`).
    4. `font-weight` : Grosor de la fuente (por ejemplo, `font-weight: bold;`).
    5. `text-align` : Alineación del texto (por ejemplo, `text-align: center;`).
    6. `text-decoration` : Decoración del texto (por ejemplo, `text-decoration: underline;`).
- Para caja y espaciado:
    1. `width` : Ancho del elemento (por ejemplo, `width: 100px;`).
    2. `height` : Alto del elemento (por ejemplo, `height: 100px;`).
    3. `padding` : Espacio interno del elemento (por ejemplo, `padding: 10px;`).
    4. `margin` : Espacio externo del elemento (por ejemplo, `margin: 10px;`).
    5. `border` : Borde del elemento (por ejemplo, `border: 1px solid black;`).
- Fondo:
    1. `background-color` : Color de fondo (por ejemplo, `background-color: yellow;`).
    2. `background-image`: Imagen de fondo (por ejemplo, `background-image: url('imagen.jpg');`).
    3. `background-size` : Tamaño de la imagen de fondo (por ejemplo, `background-size: cover;`).
- Visualización:
    1. `display` : Cómo se muestra el elemento (por ejemplo, `display: block;` , `display: inline;` , `display:flex;`).
    2. `position` : Posicionamiento del elemento (por ejemplo, `position: relative;` , `position: absolute;`).
    3. `top` , `right` , `bottom` , `left` : Posicionamiento del elemento (por ejemplo, `top: 10px;`).
    4. `z-index` : Orden de apilamiento del elemento (por ejemplo, `z-index: 10;`).
- Otros:
    1. `overflow` : Cómo manejar el contenido desbordado (por ejemplo, `overflow: hidden;` , `overflow: scroll;`).
    2. `opacity` : Opacidad del elemento (por ejemplo, `opacity: 0.5;`).
    3. `cursor` : Tipo de cursor al pasar sobre el elemento (por ejemplo, `cursor: pointer;`).