const alumno_materia = require("../models/alumno_materia");

async function getAlumno_materia(req, res) {
  try {
    const alumnos = await alumno_materia.findAll();
    res.json({
        data : alumnos
    });
} catch (error) {
    console.log(error);
  }
}

async function createAlumno_materia(req, res){
    const {fk_alumno , fk_materia , fk_grupo , fk_calificacion } = req.body;
    console.log(fk_alumno , fk_materia , fk_grupo , fk_calificacion);
    
    try {
        const nuevo = await alumno_materia.create({
            fk_alumno , fk_materia , fk_grupo , fk_calificacion
        }, {
            fields : ['fk_alumno' , 'fk_materia' , 'fk_grupo' , 'fk_calificacion']
        });

        if(nuevo ) {
            return res.json({
                message : 'Alumno_Materia Creada',
                data : nuevo
            });
        }
    } catch (error) {
        res.json({
            message: "Salio mal",
            data: {}
        });
    }
}

async function updateAlumno_materia(req, res) {
    const { id_alumno_materia } = req.params;
    const { fk_alumno , fk_materia , fk_grupo , fk_calificacion } = req.body;

    try {
        const updateAlumno = await alumno_materia.findAll({
            atributes : ['fk_alumno' , 'fk_materia' , 'fk_grupo' , 'fk_calificacion'],
            where : {id_alumno_materia}
        });

        if(updateAlumno.length > 0) {
            updateAlumno.forEach(async nueva => {
                await nueva.update({
                    fk_alumno , fk_materia , fk_grupo , fk_calificacion
                });
            });
            return res.json( {
                message : 'Creacion de alumno_materia',
                data : updateAlumno
            });
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    getAlumno_materia,
    createAlumno_materia,
    updateAlumno_materia
}
