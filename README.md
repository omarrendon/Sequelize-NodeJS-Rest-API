# Sequelize-NodeJS-Rest-API
## Rest-API creada con NodeJS, Express y con el ORM Sequelize y PostgresQL. 

REST-API creada para la implementación de una Base de Datos hecha en PostgresQL y un servidor desarrollado en NodeJS y su framework Exprees,
y para el manejo de los datos se decidío utilizar el ORM Sequelize, para poder crear, consultar, actualizar y eliminar datos de nuestra respectiva base de datos.

## Documentación
Para poder hacer uso del API Rest es necesario saber los recursos que vas a solicitar, es por eso que hago saber las diferentes rutas con las cuales podrás solicitar la información que necesites.

### Rutas y sus diferentes verbos con los cuales solicitarás los recursos.
-ADMINISTRADOR
GET /administrador
GET /administrador/1
POST /administrador
DELETE /administrador/1
PUT /administrador/1

-ALUMNO
GET /alumno
GET /alumno/1
GET /alumno/carrera/1
POST /alumno
DELETE /alumno/1
PUT /alumno/1

-ASISTENCIAS
GET /asistencias
GET /asistencias/materia/1
POST /asistencias
DELETE /asistencias/1
PUT /asistencias/1

-CALIFICACION
GET /calificacion/1
GET /calificacion
POST /calificacion
DELETE /calificacion/1
PUT /calificacion

-CARRERA
GET /carrera
GET /carrera/1
POST /carrera
DELETE /carrera/1
PUT /carrera

-GRUPO
GET /grupo
GET /grupo/1
POST /grupo
DELETE /grupo/1
PUT /grupo

-MAESTRO
GET /maestro
GET /maestro/1
POST /maestro
DELETE /maestro/1
PUT /maestro

-MATERIA
GET /materia
GET /materia/1
GET /materia/carrera/1
POST /materia
DELETE /materia/1
PUT /materia

-PERIODO
GET /periodo
GET /periodo/1
POST /periodo
DELETE /periodo/1
PUT /periodo

-ALUMNO_MATERIA
GET /AlumnoMateria
GET /AlumnoMateria/1
GET /AlumnoMateria/alumno/1
POST /AlumnoMateria
DELETE /AlumnoMateria/1
PUT /AlumnoMateria



Para poder hacer unso de ella es necesario el comando, para póder insatlar todas las dependecías utilizadas.
```
npm install
```
