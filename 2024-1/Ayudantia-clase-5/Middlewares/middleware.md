
# ¿Qué es un Middleware?

Un middleware es un intermediario entre dos aplicaciones o sistema para facilitar la comunicación y el intercambio de datos entre ellos.

## ¿Por que debemos tener un middleware en un login?

Un middleware en el login es muy importante por varias razones:

1. **Seguridad:** Un middleware puede proporcionar una capa adicional de seguridad al proceso de autenticación. Puede verificar la identidad del usuario y validar las credenciales antes de permitir el acceso a recursos protegidos.
1. **Centalizar la lógica de autenticación:** Al tener un middleware dedicado para la autenticación, puedes centralizar la lógica relacionada con el login en un solo lugar. Esto facilita el mantenimiento y la gestión del código, ya que cualquier cambio o mejora en la lógica de autenticación solo necesita realizarse en un único punto.
1. **Facilita la integración con otros sistemas:** Un middleware de login bien diseñado puede facilitar la integración con otros sistemas o servicios de autenticación externos, como OAuth, LDAP o proveedores de identidad federados. Esto simplifica el proceso de implementación de autenticación única (SSO) o la integración con servicios de terceros.

## Autenticación

La autenticación es el acto de verificar la identidad de un usuario, asegurando que realmente sea quien afirma ser. En nuestro sistema, implementamos la autenticación mediante lo que se conoce como "Single-Factor Authentication". Esto implica que para iniciar sesión, los usuarios deben proporcionar un correo electrónico y una contraseña válidos.

## Autorización

Una vez que el sistema verifica que eres quien dices ser, te da acceso a cierta parte del software o a su totalidad. Esto depende de el acceso que tenga cada usuario.

Una vez que el sistema ha verificado la identidad del usuario, se procede a la autorización. En este paso, se determina qué partes del software o recursos específicos puede acceder el usuario. Este acceso puede variar según el rol, los privilegios o los permisos asignados a cada usuario.

La autorización puede abarcar desde otorgar acceso a ciertas funciones dentro de la aplicación hasta permitir el acceso completo al sistema, dependiendo de los niveles de acceso establecidos para cada usuario.