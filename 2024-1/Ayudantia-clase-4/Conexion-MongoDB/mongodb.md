
## Conexión a MongoDB Atlas

- Primero se tiene que iniciar sesión en MongoDB Atlas. Recomendable iniciar sesión con una cuenta de Google:
    - Link: [MongoDB Atlas](https://account.mongodb.com/account/login)

![Iniciarsesión.png](../images/Iniciarsesión.png)

- Una vez seleccionada la cuenta de Google con la que iniciaremos la sesión, aceptamos la política de privacidad y las condiciones del servicio:

![Aceptarpolitica.png](../images/Aceptarpolitica.png)

- Luego nos darán la bienvenida y nos solicitarán algunos campos que rellenar, puede elegir las mismas opciones:

![BienvenidaAtlas.png](../images/BienvenidaAtlas.png)

- Ahora nos aparece un apartado en donde nos indica desplegar nuestra base de datos, en donde nosotros seleccionaremos las siguientes opciones:

![desplegarDatabase.png](../images/desplegarDatabase.png)
![nombreCluster.png](../images/nombreCluster.png)

- Ahora procedemos a configurar el apartado de **Security Quickstart:**

![creacionUsuario.png](../images/creacionUsuario.png)
![ipAdd.png](../images/ipAdd.png)

- Le damos a **Finish and Close** y luego a **Go to Overview:**

![Overview.png](../images/Overview.png)

- Luego estaremos en el apartado de **Overview**, en donde podremos visualizar nuestras **implantaciones de bases de datos** o **Database Deployments** y nos aparecerá nuestra la opción para conectarse a nuestra base de datos ya creada anteriormente:

![connectDatabase.png](../images/connectDatabase.png)

- Le damos a **Connect** y nos aparecerá la siguiente **interfaz:**

![ConnectAyudantia.png](../images/Connect%20EjemploAyudantia.png)

- Hacemos click en la opción que dice Drivers y luego nos mostrará lo siguiente:

![ConnectAyudantia1.png](../images/Connect%20EjemploAyudantia%201.png)

- Copiamos lo que dice en el apartado de **Add your connection string into your application code** en nuestro archivo **.env**.
- Agregamos `PORT = 4000`, `HOST = localhost` y lo mas importante `DB_URL = <lo que copiamos en el paso anterior>` :

![env1.png](../images/env1.png)

- Ahora debemos modificar donde dice `<password>` y debemos colocar la contraseña que copiamos en nuestro bloc de notas:

![env2.png](../images/env2.png)

- En caso de no haber copiado con anterioridad la contraseña en un bloc de notas, podemos generar una nueva contraseña, nos vamos al apartado de **Security Quickstart** y seleccionamos la opción **edit**:

![cambiarpassword.png](../images/cambiar%20password.png)

- Luego de seleccionar la opción **edit**, podemos **autogenerar una contraseña segura** y esa será la nueva contraseña, luego le dan a **Update Password**.
- Una vez finalizado eso tenemos nuestro archivo **.env** configurado correctamente.