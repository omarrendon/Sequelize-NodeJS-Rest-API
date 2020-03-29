const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

// Routes require
const carreraRoutes = require('./routes/carrera');
const alumnoRoutes = require('./routes/alumnos');
const maestroRoutes = require('./routes/maestros');
const grupoRoutes = require('./routes/grupo');
const administradorRouter = require('./routes/administrador');
const periodoRoutes = require('./routes/periodo');
const calificacionRoutes = require('./routes/calificacion');
const materiaRoutes = require('./routes/materia');
const asistenciasRoutes = require('./routes/asistencias');
const alumno_materiaRoutes = require('./routes/alumno_materia');
//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/alumno', alumnoRoutes);
app.use('/carrera', carreraRoutes);
app.use('/maestro', maestroRoutes);
app.use('/grupo', grupoRoutes);
app.use('/administrador', administradorRouter);
app.use('/periodo', periodoRoutes);
app.use('/calificacion' , calificacionRoutes);
app.use('/materia', materiaRoutes);
app.use('/asistencias' , asistenciasRoutes);
app.use('/AlumnoMateria', alumno_materiaRoutes);

//Server port
app.listen(app.get('port'), () => {
    console.log(`SERVIDOR EN EL PUERTO ${app.get('port')}`);
});