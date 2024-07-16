
## Motores de renderizado

### Introducción

- Los navegadores web utilizan motores para renderizar el contenido web.
- Los motores de renderizado convierten HTML, CSS y JavaScript en la interfaz gráfica que vemos.

### Principales motores de renderizado

- `Blink` : Utilizado por Google Chrome y otros navegadores basados en Chromium.
- `Gecko` : Utilizado por Mozilla Firefox.
- `WebKit` : Utilizado por Safari.

### Proceso de renderizado

- `Parsing HTML` : El navegador convierte el HTML en un árbol DOM.
- `Construcción de CSSOM` : El navegador convierte CSS en un árbol de estilos CSS.
- `Render Tree` : Combina el DOM y el CSSOM en un árbol de renderizado.
- `Layout` : Calcula el tamaño y posición de cada elemento.
- `Painting` : Convierte los elementos en píxeles en la pantalla.
- `Compositing` : Organiza las capas y las renderiza en la pantalla final.

### Optimización del renderizado

- `Minimizar Reflows y Repaints` : Cambios en el DOM o CSS pueden causar reflow (recalcular el layout) y repaint (redibujar la pantalla). Minimiza estos cambios para mejorar el rendimiento.
- `Uso de transformaciones y opacidades` : Propiedades como `transform`  y `opacity`  son manejadas por la GPU, mejorando el rendimiento.
- `Lazy Loading` : Carga de imágenes y otros recursos de manera diferida para mejorar el tiempo de carga inicial.

### Herramientas de desarrollo

- `Chrome DevTools` : Herramientas para depurar, inspeccionar y optimizar el rendimiento de la página.
- `Lighthouse` : Herramienta de Google para auditar la calidad de la páginas web (rendimiento, accesibilidad, SEO, etc).