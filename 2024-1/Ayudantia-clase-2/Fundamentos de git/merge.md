
## Merge

### ¿Qué significa hacer un Merge?

Hacer un `Merge` nos permite unir el contenido que tenemos en diferentes ramas, para que queden unificadas.

### Comandos a utilizar

- `git diff rama1 rama2`: Nos muestra la diferencia entre una rama y la otra.
- `git merge ramaOrigen ramaDestino`: Nos permite unificar los cambios entre una rama y otra.

### ¿Cómo hacer un Merge?

1. Nos ubicamos en la rama destino.
2. Ejecutamos el comando `git merge ramaOrigen`.
3. Si hay conflictos, los resolvemos.
4. Hacemos un `commit` para dejar registro de los cambios.
5. Hacemos un `push` para subir los cambios al repositorio remoto.
6. Listo, ya tenemos unificadas las ramas.

### Resolución de conflictos al hacer un Merge

Cuando hacemos un `merge` entre dos ramas y estas tienen cambios en las mismas líneas de un archivo, se generan conflictos. Para resolverlos, debemos seguir los siguientes pasos:

Para resolver los conflictos generados por un merge utilizando comandos desde la bash, puedes seguir estos pasos:

1. Abre la terminal y navega hasta el directorio de tu repositorio.

2. Asegúrate de estar en la rama destino donde quieres aplicar el merge.

3. Ejecuta el siguiente comando para realizar el merge:

```bash
git merge ramaOrigen
```

Esto generará los conflictos en los archivos que tienen cambios en las mismas líneas.

4. Utiliza un editor de texto para abrir los archivos con conflictos y busca las secciones marcadas con **<<<<<<<**, **=======**, y **>>>>>>>**. Estas secciones representan las diferencias entre las ramas.

5. Edita manualmente los archivos para resolver los conflictos. Puedes elegir qué cambios quieres mantener y cómo combinarlos.

6. Una vez que hayas resuelto todos los conflictos, guarda los archivos modificados.

7. Vuelve a la terminal y ejecuta el siguiente comando para marcar los conflictos como resueltos:

```bash
git add .
```

8. Realiza un commit para registrar los cambios resueltos:

```bash
git commit -m "Resolución de conflictos"
```

9. Finalmente, realiza un push para subir los cambios al repositorio remoto:

```bash
git push
```

Con estos pasos, deberías poder resolver los conflictos generados por el merge utilizando comandos desde la bash.
