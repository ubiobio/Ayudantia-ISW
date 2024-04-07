
## Conexión a MongoDB en la nube

Si te habías logeado previamente en MongoDB, los pasos son los siguientes:
- Vas al siguiente apartado:

![1.png](../images/1.png)

- Creas un nuevo proyecto en `New Project`. Le colocas un nombre al proyecto y `next`:

![2.png](../images/2.png)

- Agregas a tus miembros de equipo y les asignas el rol de `Project Owner`, así tienen toda la administración del proyecto:

![3.png](../images/3.png)

- Le dan a `Create Project` y luego al botón en verde que dice `Create`:

![4.png](../images/4.png)

- Seleccionan las siguientes configuraciones y le dan a `Create Deployment`:

![5.png](../images/5.png)

- Luego les proporcionara un usuario creado, con su `Username` y `Password` correspondientes, guárdenlos en un bloc de nota y luego le dan a `Create Database User`:

![6.png](../images/6.png)

- Le dan a `Choose a connection method` y luego a `Drivers`:

![7.png](../images/7.png)

- Al clickear `Drivers` se vería así:

![8.png](../images/8.png)

- Copiamos lo que dice en el apartado de `Add your connection string into your application code` en nuestro archivo `.env`.
- Agregamos `PORT=4000`, `HOST=localhost` y lo más importante `DB_URL:<URL del apartado Drivers>`, algo así quedaría utilizando otra URL de ejemplo:

![9.png](../images/9.png)

- Ahora debemos modificar donde dice `<password>` y debemos colocar la contraseña que copiamos en nuestro bloc de notas:

![10.png](../images/10.png)

### Apartado importante!

- Ir a -> `Security` -> `Quickstart` y bajan a la zona donde dice `Where would you like to connect from?`:

![11.png](../images/11.png)

- Eliminan la IP que ya viene por defecto, le dan al botón de `Remove`:

![12.png](../images/12.png)

- Escriben la siguiente IP ``0.0.0.0` y la añaden apretando el botón `Add Entry`:

![13.png](../images/13.png)

- Una vez agregada la dirección IP, debería quedar de la siguiente manera:

![14png](../images/14.png)

- Le dan al botón de `Finish and Close` y estaría lista nuestra configuración.
