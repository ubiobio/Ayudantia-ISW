
## Componentes

### ¿Qué es un componente en React?

Un componente de React es una pieza de código reutilizable que define cómo una parte de la interfaz de usuario debe aparecer y comportarse. Los componentes pueden ser funciones o clases de JavaScript que reciben datos (props) y devuelven elementos de React que describen lo que se debe renderizar en la pantalla. Utilizando JSX, una extensión de la sintaxis de JavaScript, los componentes facilitan la creación, mantenimiento y eliminación de partes de la UI. React permite combinar estos componentes para construir aplicaciones complejas.

![componente.png](../images/componente.png)

La convención para escribir componentes en React es utilizar PascalCase, por ejemplo:

- Componente para buscar: `SearchValue`.
- Componente para msotrar algo en una tarjeta: `TwitterCard`.

### Recordar las distintas convenciones

1. **camelCase**: Las palabras se unen sin espacios, y cada palabra después de la primera comienza con una mayúscula.
    - Ejemplo: `searchValue`.

2. **PascalCase**: Primera letra de cada palabra en mayúscula.
    - Ejemplo: `SearchValue`.

3. **snake_case**: Palabras en minúscula separada por guiones bajos.
    - Ejemplo: `search_value`.

4. **kebab-case**: Palabras en minúscula separadas por guiones.
    - Ejemplo: `search-value`.