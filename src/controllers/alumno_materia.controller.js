const alumno_materia = require("../models/alumno_materia");

const alumno = require("../models/alumno");
const materia = require("../models/materia");
const grupo = require("../models/grupo");
const calificacion = require("../models/calificacion");

async function getAlumno_materia(req, res) {
  try {
    const alumnos = await alumno_materia.findAll({
      include: [
        {
          model: alumno,
          as: "aluAlumno"
        },
        {
          model: materia,
          as: "aluMateria"
        },
        {
          model: grupo,
          as: "aluGrupo"
        },
        {
          model: calificacion,
          as: "aluCalificaciones"
        }
      ]
    });
    res.json({
      data: alumnos
    });
  } catch (error) {
    console.log(error);
  }
}

async function getAlumno_materiaByAlumno(req, res) {
    const { fk_alumno } = req.params;

    try {
        const fkAlumno = await alumno_materia.findAll( {
            where : { fk_alumno},
            include: [
                {
                  model: alumno,
                  as: "aluAlumno"
                },
                {
                  model: materia,
                  as: "aluMateria"
                },
                {
                  model: grupo,
                  as: "aluGrupo"
                },
                {
                  model: calificacion,
                  as: "aluCalificaciones"
                }
              ]
        });

        res.json({
            fkAlumno
        });
    } catch (error) {
        console.log(error);
    }
}

async function createAlumno_materia(req, res) {
  const { fk_alumno, fk_materia, fk_grupo, fk_calificacion } = req.body;
  console.log(fk_alumno, fk_materia, fk_grupo, fk_calificacion);

  try {
    const nuevo = await alumno_materia.create(
      {
        fk_alumno,
        fk_materia,
        fk_grupo,
        fk_calificacion
      },
      {
        fields: ["fk_alumno", "fk_materia", "fk_grupo", "fk_calificacion"]
      }
    );

    if (nuevo) {
      return res.json({
        message: "Alumno_Materia Creada",
        data: nuevo
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
  const { fk_alumno, fk_materia, fk_grupo, fk_calificacion } = req.body;

  try {
    const updateAlumno = await alumno_materia.findAll({
      atributes: ["fk_alumno", "fk_materia", "fk_grupo", "fk_calificacion"],
      where: { id_alumno_materia }
    });

    if (updateAlumno.length > 0) {
      updateAlumno.forEach(async nueva => {
        await nueva.update({
          fk_alumno,
          fk_materia,
          fk_grupo,
          fk_calificacion
        });
      });
      return res.json({
        message: "Creacion de alumno_materia",
        data: updateAlumno
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAlumno_materia,
  createAlumno_materia,
  updateAlumno_materia,
  getAlumno_materiaByAlumno
};
