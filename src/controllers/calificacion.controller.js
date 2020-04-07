const calificacion = require('../models/calificacion');

async function getCalificacion(req, res) {
    try {
        const calificaciones = await calificacion.findAll();
        res.json({
            data : calificaciones
        })
    } catch (error) {
        console.log(error);
        
    }
}

async function getOneCalificacion(req, res) {
    const { id_calificacion } = req.params;
    try {
        const id = await calificacion.findOne({
            where : {id_calificacion},
            atributes : ["bimestre_uno", "bimestre_dos", "ordinario", "promedio_bimestral", "promedio_final", "extraordinario", "titulo", "insuficiencia"]
        })
        res.json(id)        
    } catch (error) {
        console.log(error)
    }
}


async function createCalificacion(req, res) {
    const {  bimestre_uno, bimestre_dos, ordinario, promedio_bimestral, promedio_final, extraordinario, titulo, insuficiencia} = req.body;
    console.log( bimestre_uno, bimestre_dos, ordinario, promedio_bimestral, promedio_final, extraordinario, titulo, insuficiencia);

    try {
        
        const newCali = await calificacion.create({
             bimestre_uno, bimestre_dos, ordinario, promedio_bimestral, promedio_final, extraordinario, titulo, insuficiencia
        }, {
            fields : ["bimestre_uno", "bimestre_dos", "ordinario", "promedio_bimestral", "promedio_final", "extraordinario", "titulo", "insuficiencia"]

        });

        if (newCali) {
            return res.json({
              message: "Calificacion creado!",
              data: newCali
            });
          }

    } catch (error) {
        console.log(error);
    }
}

async function deleteCalificacion(req, res) {
    const { id_calificacion } = req.params;
    try {
        const deleteCali = await calificacion.destroy({
            where : { id_calificacion }
        });
        res.json({
            message: "Eliminado correctamente!",
            count: deleteCali
        });

    } catch (error) {
        console.log(error);
    }
}

async function updateCalificacion(req, res) {
    const { id_calificacion } = req.params;
    const {  bimestre_uno, bimestre_dos, ordinario, promedio_bimestral, promedio_final, extraordinario, titulo, insuficiencia} = req.body;
    console.log( bimestre_uno, bimestre_dos, ordinario, promedio_bimestral, promedio_final, extraordinario, titulo, insuficiencia);

    try {
        const caliUpdte = await calificacion.findAll({
            atributes : ["bimestre_uno", "bimestre_dos", "ordinario", "promedio_bimestral", "promedio_final", "extraordinario", "titulo", "insuficiencia"],
            where : {id_calificacion}
        });
        if( caliUpdte.length > 0) {
            caliUpdte.forEach( async nuevoCali => {
                await nuevoCali.update({
                    bimestre_uno, bimestre_dos, ordinario, promedio_bimestral, promedio_final, extraordinario, titulo, insuficiencia
                });
            });
        }
        return res.json({
            message: "Carrera Updated",
            data: caliUpdte
        });

    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getCalificacion,
    createCalificacion,
    deleteCalificacion,
    updateCalificacion,
    getOneCalificacion
};