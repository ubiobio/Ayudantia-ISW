
## Selectores en CSS

### Selector de elemento

Selecciona todos los elementos de un tipo específico. Por ejemplo, `p` selecciona todos los párrafos.

```css
p {
    color: blue;
}
```

### Selector de clase

Selecciona todos los elementos con una clase específica. Utiliza un punto `.` seguido del nombre de la clase.

```css
.mi-clase {
    background-color: yellow;
}
```

### Selector de ID

Selecciona un único elemento con un ID específico. Utiliza un `#` seguido del ID.

```css
#mi-id {
    margin: 20px;
}
```

### Selector de grupo

Selecciona todos los elementos mencionados, separados por comas.

```css
h1, h2, h3 {
    color: #333;
}
```

### Selector descendente

Selecciona todos los elementos de un tipo que están dentro de otro tipo de elemento.

```css
div p {
    color: red;
}
```

### Selector de hijos directos

Selecciona todos los elementos que son hijos directos de un elemento específico. Utiliza el símbolo `>`.

```css
div > p {
    color: green;
}
```

### Selector de hermano general

Selecciona todos los elementos que son hermanos de un tipo después de un elemento específico. Utiliza el símbolo `~`.

```css
h1 ~ p {
    color: orange;
}
```

### Selector de hermano adyacente

Selecciona el primer elemento de un tipo que sigue inmediatamente después de un elemento específico. Utiliza el símbolo `+`.

```css
h1 + p {
    color: purple;
}
```

### Selector de atributos

Selecciona elementos que tienen un atributo específico.

```css
input[type="text"] {
    border: 1px solid #ccc;
}
```

### Selector de pseudoclase

Aplica estilos a un elemento cuando el ratón está sobre él.

```css
a:hover {
    color: red;
}
```

Selecciona el primer hijo de su padre.

```css
p:first-child {
    font-weight: bold;
}
```

Selecciona el enésimo hijo de su padre.

```css
tr:nth-child(odd) {
    background-color: #f0f0f0;
}
```

### Selector de pseudoelementos

- `::before`: Inserta contenido antes del contenido del elemento.

```css
p::before {
    content: "Nota: ";
    font-weight: bold;
}
```