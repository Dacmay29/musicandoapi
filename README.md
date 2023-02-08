# Musicando

### Esta es la base de datos musicando, a continuación vas a ver como fue creada
_Esta base de datos está compuesta por las siguientes tablas_
- Artistas
- Canciones
- Albumes
- Generos

_Las relaciones están definidas de la siguiente forma_
- Una canción tiene un album
- Un albun tiene muchas canciones

- Una canción tiene un genero
- Un genero tiene muchas canciones

- Una canción tiene un artista
- Un artista tiene muchas canciones

Esta instancia consiste en desarrollar un CRUD de una aplicación conectada a la base de datos que se encuentra dentro del zip. El desarrollo a implementar es solo de backend tipo API REST.
Para ello te mencionamos varios de los módulos que vas a tener que usar:
Express
Sequelize
Mysql2
Entre otros
Respecto a la base de datos, vas a tener que importarla como se vio varias veces en la clase, el script de importación se encuentra en el material.
En nuestro proyecto de Express queremos modelar la base de datos mediante sequelize.
Deberán estar presentes los siguientes endpoints:
/canciones (GET) que muestre un listado de las canciones con sus propiedades
/canciones (POST) para crear un nuevo registro de una canción
/canciones/:id (GET) que muestre una canción
/canciones/:id (PUT) para editar una canción
/canciones/:id (DELETE) para eliminar una canción
/generos (GET) listado de todos los géneros con sus canciones
Aclaración: para todos los endpoints se debe devolver un json con su código de estado y el resultado correspondiente, en caso de haberlo.


1 Descargar y descomprimir el archivo zip que se te ha proporcionado para obtener la base de datos.

2 Crear un repositorio en GitHub para alojar el código de tu proyecto.

3Crear un nuevo proyecto de Node.js utilizando el comando "npm init" en la línea de comando.

4 Instalar las dependencias necesarias: Express, Sequelize, Mysql2.

5 Importar la base de datos a tu servidor MySQL usando el script de importación que se encuentra en el material.

6 Configurar Sequelize para conectarse a la base de datos importada.

7 Crear los modelos de datos correspondientes a las tablas de la base de datos.

8 Crear los controladores para manejar las peticiones HTTP correspondientes a cada endpoint.

9 Crear las rutas para manejar las peticiones a cada endpoint.

10 Probar tu aplicación mediante herramientas de prueba de API como Postman y Thunder Client.

11 Subir tu código a GitHub y enviar el enlace al correo.

12 Seguir las instrucciones del README y documentar tu código para que sea legible y fácil de seguir.


Se finaliza proyecto  terminando  todos los requerimientos del caso realizando pruebas  con thunder client en  VSC

gracias Por la oportunidad  de  realizar  mi proyecto  solo ... 

David Cuentas May 
