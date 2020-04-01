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
const documentoRoutes = require('./routes/documento_generado');

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
app.use('/documento', documentoRoutes);

const alumno = require('./models/alumno');
const carrera = require('./models/carrera');
const maestro = require('./models/maestro');
const grupo = require('./models/grupo');
const administrador = require('./models/administrador');
const periodo  = require('./models/periodo');
const calificacion = require('./models/calificacion');
const materia = require('./models/materia');
const asistencias = require('./models/asistencia');
const alumno_materia = require('./models/alumno_materia');
const documento = require('./models/documento_generado');

alumno.belongsTo(carrera, { as : 'carrera' , foreignKey : 'fk_carrera'});

materia.belongsTo(carrera, { as : 'materiaCarrera' , foreignKey : 'fk_carrera'});
materia.belongsTo(maestro, { as : 'materiaMaestro' , foreignKey : 'fk_maestro'}); 

asistencias.belongsTo(materia , { as : 'asistenciasMateria' , foreignKey : 'fk_materia'});
asistencias.belongsTo(alumno , { as : 'asistenciasAlumno' , foreignKey : 'fk_alumno'});

alumno_materia.belongsTo(alumno , { as : 'aluAlumno' , foreignKey : 'fk_alumno'});
alumno_materia.belongsTo(calificacion , { as : 'aluCalificaciones' , foreignKey : 'fk_calificacion'});
alumno_materia.belongsTo(grupo , { as : 'aluGrupo' , foreignKey : 'fk_grupo'});
alumno_materia.belongsTo(materia , { as : 'aluMateria' , foreignKey : 'fk_materia'});

documento.belongsTo(alumno_materia , { as : 'docAlumno' , foreignKey : 'fk_alumno_materia'});
documento.belongsTo(periodo , { as : 'docPeriodo' , foreignKey : 'fk_periodo'});
documento.belongsTo(asistencias , { as : 'docAsistencias' , foreignKey : 'fk_asistencias'});


//Server port
app.listen(app.get('port'), () => {
    console.log(`SERVIDOR EN EL PUERTO ${app.get('port')}`);
});