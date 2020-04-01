const asistencias = require("../models/asistencia");

const materia = require("../models/materia");
const alumno = require("../models/alumno");

async function getAsistencias(req, res) {
  try {
    const todas = await asistencias.findAll({
      atributes: ["numero_asistencias", "fk_materia", "fk_alumno"],
      include: [
        {
          model: materia,
          as: "asistenciasMateria"
        },
        {
          model: alumno,
          as: "asistenciasAlumno"
        }
      ]
    });
    res.json({
      todas
    });
  } catch (error) {
    console.log(error);
  }
}

async function getAsistenciasByMateria(req, res) {
  const { fk_materia } = req.params;

  try {
    const byMateria = await asistencias.findAll({
      where: { fk_materia },
      attributes: ["numero_asistencias", "fk_materia", "fk_alumno"],
      include: [
        {
          model: materia,
          as: "asistenciasMateria"
        },
        {
          model: alumno,
          as: "asistenciasAlumno"
        }
      ]
    });
    res.json({ byMateria });
  } catch (error) {
    console.log(error);
  }
}

async function createAsistencias(req, res) {
  const { numero_asistencias, fk_materia, fk_alumno } = req.body;
  console.log(numero_asistencias, fk_materia, fk_alumno);

  try {
    const nueva = await asistencias.create(
      {
        numero_asistencias,
        fk_materia,
        fk_alumno
      },
      {
        fields: ["numero_asistencias", "fk_materia", "fk_alumno"]
      }
    );

    if (nueva) {
      return res.json({
        message: "Asistencia Creada",
        data: nueva
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateAsistencias(req, res) {
  const { id_asistencias } = req.params;
  const { numero_asistencias, fk_materia, fk_alumno } = req.body;

  try {
    const id = await asistencias.findAll({
      where: { fk_materia },
      attributes: ["numero_asistencias", "fk_materia", "fk_alumno"]
    });

    const idUpadate = asistencias.update(
      {
        numero_asistencias,
        fk_materia,
        fk_alumno
      },
      {
        where: { id_asistencias }
      }
    );

    return res.json({
      message: "Asistencia Updated",
      data: id
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getAsistencias,
  getAsistenciasByMateria,
  updateAsistencias,
  createAsistencias
};
