
## Terminal y línea de comandos 🚀

La línea de comandos nos permite interactuar con nuestro computador sin necesidad de utilizar una interfaz gráfica. Sin embargo, los computadores emplean distintos sistemas de archivos y manejan diferentes comandos, dependiendo del sistema operativo que utilicen.

## Diferencias entre la estructura de archivos de Windows y Linux


#### Windows 🧑‍💻

En Windows, la estructura de archivos se basa en una jerarquía de directorios y subdirectorios, iniciando por la letra del disco en el que se encuentren (por ejemplo, C:\). Los nombres de los archivos pueden incluir espacios y no distinguen entre mayúsculas y minúsculas.

#### Linux 🧑‍💻

Por otro lado, Linux utiliza una estructura de árbol. Todo comienza desde un directorio raíz denotado por una barra (/). Los nombres de los archivos y directorios en Linux son sensibles a las mayúsculas y minúsculas.

#### Diferencia 🕵️

Por ejemplo, un archivo en un subdirectorio de Windows podría tener la siguiente ruta: **C:\Usuarios\Usuario\Documentos\archivo.txt**. En Linux, la ruta equivalente podría ser: **/home/usuario/documentos/archivo.txt**.

## Comandos básicos en la terminal 👨‍💻

#### Powershell 💻

- `ls`: Listar los archivos y directorios en el directorio actual. En la Powershell: 

![lsPowershell.png](../images/ls%20powershell.png)

- `Get-ChildItem`: Ver todos los archivos del directorio actual en formato de lista. En la PowerShell:

![getChildItem.png](../images/Get-ChildItem%20powershell.png)

- `Get-ChildItem -Force`: Ver todos los archivos del directorio actual y archivos ocultos en formato de lista. En la PowerShell:

![getChildItemForce.png](../images/Get-ChildItem%20-Force.PNG)

- `cd`: Moverse o cambiar a otro directorio. En la PowerShell:

![cdPowershell.png](../images/cd%20PowerShell.png)

- `pwd`: Nos muestra la ruta del directorio en que te encuentras ahora mismo. En la PowerShell:

![pwdPowershell.png](../images/pwd%20powershell.png)

- `mkdir`: Crear un nuevo directorio. En la PowerShell:

![mkdirPowershell.png](../images/mkdir%20powershell.png)

- `New-Item -ItemType File -Path "archivo"`: Nos permite crear archivos. En la PowerShell:

![newItem.png](../images/New%20Item%20powershell.png)

- `history`: Permite ver el hisotrial de comandos que has ejecutado previamente en la sesión actual de la terminal. En la PowerShell:

![historyPowershell.png](../images/history%20powershell.png)

- `clear o cls`: Limpia la pantalla de la terminal. También se puede usar el atajo de teclado `Ctrl + L`.

- `cat`: Ver el contenido de un archivo. En la PowerShell:

![catPowershell.png](../images/cat%20powershell.png)

- `"Nuevo contenido" | Set-Content <archivo>`: Permite modificar el contenido de un archivo. En la PowerShell:

- **Antes de realizar el cambio:**
![archivo1.png](../images/modificacion%20archivo%20powershell%201.png)

- **Después de realizar el cambio:**
![archivo2.png](../images/modificacion%20archivo%20powershell%202.png)

- `rm`: Nos permite borrar un archivo o directorio. En la PowerShell:

![rmPowershell.png](../images/rm%20powershell.png)

- `mv`: Mueve o renombra archivos y directorios. En la PowerShell:

![mvPowershell.png](../images/mv%20powershell.png)

#### Bash 💻

- `ls`: Listar los archivos y directorios en el directorio actual. En la Bash:

![lsBash.png](../images/ls%20bash.png)

- `ls -l`: Ver todos los archivos del directorio actual en formato de lista. En la Bash:

![lslBash.png](../images/ls%20-l%20bash.png)

- `ls -a`: Ver todos los archivos del directorio actual y archivos ocultos en formato de lista. En la Bash:

![lsa.png](../images/ls%20-a%20Bash.png)

- `ls -la`: Ver todos los archivos del directorio actual, archivos ocultos y en formato de lista. En la Bash:

![lsla.png](../images/ls%20-la%20Bash.png)

- `cd`: Moverse o cambiar a otro directorio. En la Bash:

![cdBash.png](../images/cd%20bash.png)

- `pwd`: Nos muestra la ruta del directorio en que te encuentras ahora mismo. En la Bash:

![pwdBash.png](../images/pwd%20bash.png)

- `mkdir`: Crear un nuevo directorio. En la Bash:

![mkdirBash.png](../images/mkdir%20bash.png)

- `touch`: Nos permite crear archivos. En la Bash:

![touchBash.png](../images/touch%20bash.png)

- `history`: Permite ver el hisotrial de comandos que has ejecutado previamente en la sesión actual de la terminal. En la Bash:

![historyBash.png](../images/history%20bash.png)

- `clear`: Limpia la pantalla de la terminal. También se puede usar el atajo de teclado `Ctrl + L`.

- `cat`: Ver el contenido de un archivo. En la Bash:

![catBash.png](../images/cat%20bash.png)

- `nano <archivo>`: Permite modificar el contenido de un archivo. Una vez modificado el contenido del archivo, se guarda con `Ctrl + O` y se sale con `Ctrl + X`.

- **Antes de realizar el cambio:**

![nano1.png](../images/modificacion%20archivo%20bash%201.png)

- **Después de realizar el cambio:**

![nano2.png](../images/modificacion%20archivo%20bash%202.png)

- `rm`: Nos permite borrar un archivo o directorio. En la Bash:

![rmBash.png](../images/rm%20bash.png)

- `mv`: Mueve o renombra archivos y directorios. En la Bash:

![mvBash.png](../images/mv%20bash.png)