const doc = require("../models/documento_generado");

const alumno_materia = require("../models/alumno_materia");
const periodo = require("../models/periodo");
const asistencias = require("../models/asistencia");

async function getDoc(req, res) {
  try {
    const docs = await doc.findAll({
      include: [
        {
          model: alumno_materia,
          as: "docAlumno"
        },
        {
          model: periodo,
          as: "docPeriodo"
        },
        {
          model: asistencias,
          as: "docAsistencias"
        }
      ]
    });
    res.json({
      data: docs
    });
  } catch (error) {
    console.log(error);
  }
}

async function getDocByAlumno(req, res) {
  const { fk_alumno_materia } = req.params;

  try {
    const byAlumno = await doc.findAll({
      where: { fk_alumno_materia },
      include: [
        {
          model: alumno_materia,
          as: "docAlumno"
        },
        {
          model: periodo,
          as: "docPeriodo"
        },
        {
          model: asistencias,
          as: "docAsistencias"
        }
      ]
    });

    res.json({
      data: byAlumno
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getDoc,
  getDocByAlumno
};
