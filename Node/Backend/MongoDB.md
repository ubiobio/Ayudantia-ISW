## MongoDB en la nube

- En esta sección vamos a ver como crear una base de datos en la nube con MongoDB Atlas.
- Para esto vamos a usar el servicio de MongoDB Atlas.
- Para crear una cuenta en MongoDB Atlas debemos ir a la siguiente página: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Una vez que hayamos creado nuestra cuenta vamos a crear un nuevo proyecto.
![img_3.png](img_3.png)
- Vamos a Network Access y añadimos una ip de acceso. Para este proyecto permitiremos el acceso desde cualquier ip.
![img_4.png](img_4.png)
- Ahora vamos a crear un usuario para nuestra base de datos. Para esto vamos a Database y creamos la base de datos con el tier gratis
![img_5.png](img_5.png)
- Seleccionamos el provider, la region y le damos un nombre a la base de datos. Cuando estemos listos le damos a Create Cluster.
![img_6.png](img_6.png)
- Proceden a configurar el "Security Quickstart"
![img_7.png](img_7.png)
![img_8.png](img_8.png)
- Una vez que hayamos creado el usuario vamos a conectar nuestra aplicación a la base de datos.
![img_9.png](img_9.png)
- Hacemos click en Connect y seleccionamos Connect your application.
![img_10.png](img_10.png)
- ## _**Y copian esa url que se va a las variables de entorno.**_
- Remplazan la palabra admin por el nombre de usuario que crearon en la base de datos.
- Y remplazan la palabra password por la contraseña que crearon en la base de datos.

- Y por último reiniciamos el servidor en caso de que estuviera corriendo. **Y listo ya tenemos nuestra base de datos en la nube.**


- [Volver al BackEnd](./Backend.md)
- [Volver al inicio](../../README.md)