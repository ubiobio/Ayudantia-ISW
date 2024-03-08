
## Branch

### ¿Qué es un Branch?

En Git, una `branch` (rama en español) es una línea de desarrollo independiente que deriva de una rama principal (generalmente llamada "master" o "main"). Las ramas permiten trabajar en nuevas características, correcciones de errores o experimentos sin afectar el flujo de trabajo principal del proyecto.

Cada rama en Git es simplemente un puntero móvil que apunta a un commit específico. Cuando se trabaja en una rama, los nuevos commits se añaden a esa rama, manteniendo separadas las diferentes líneas de desarrollo. Esto permite que varios desarrolladores trabajen en diferentes características simultáneamente sin interferir entre sí.

### ¿Por qué utilizar Branch?

- **Trabajar en paralelo**: Puedes trabajar en una rama sin afectar el código de la rama `master`.

- **Experimentar**: Puedes experimentar con nuevas características sin afectar el código de la rama `master`.

- **Aislamiento de cambios**: Puedes aislar los cambios que estás realizando en una rama sin afectar el código de la rama `master`.

### Comandos

- `git branch`: Muestra las ramas que existen en el repositorio.
- `git branch <nombre-rama>`: Crea una nueva rama.
- `git checkout <nombre-rama>`: Cambia de rama.
- `git checkout -b <nombre-rama>`: Crea una nueva rama y cambia a ella.
- `git branch -d <nombre-rama>`: Elimina la rama que se le indique.
- `git branch -D <nombre-rama>` : Elimina la rama y su contenido.
- `git branch -m <nombre-rama> <nombre-nueva-rama>`: Renombra la rama actual.
- `git branch -a`: Muestra todas las ramas, tanto locales como remotas.
- `git branch -r`: Muestra todas las ramas remotas.
- `git push origin <nombre-rama>`: Sube la rama al repositorio remoto.
- `git pull origin <nombre-rama>`: Baja la rama del repositorio remoto.