const materia = require("../models/materia");

const carrera = require("../models/carrera");
const maestro = require("../models/maestro");

async function getMateria(req, res) {
  try {
    const materias = await materia.findAll({
      atributes: [
        "nombre",
        "horas",
        "faltas_permitidas",
        "fk_maestro",
        "fk_carrera"
      ],
      order: [["nombre", "DESC"]],
      include: [
        {
          model: carrera,
          as: "materiaCarrera"
          // model : maestro , as : 'materiaMaestro'
        },
        {
          model: maestro,
          as: "materiaMaestro"
        }
      ]
    });
    res.json({
      data: materias
    });
  } catch (error) {
    console.log(error);
  }
}

async function getOneMateria(req, res) {
  const { id_materia } = req.params;
  console.log(id_materia);

  try {
    const materiaId = await materia.findOne({
      where: { id_materia },
      include: [
        {
          model: carrera,
          as: "materiaCarrera"
          // model : maestro , as : 'materiaMaestro'
        },
        {
          model: maestro,
          as: "materiaMaestro"
        }
      ]
    });
    res.json({
      data: materiaId
    });
  } catch (error) {
    console.log(error);
  }
}

async function createMateria(req, res) {
  const { nombre, horas, faltas_permitidas, fk_maestro, fk_carrera } = req.body;
  console.log(nombre, horas, faltas_permitidas, fk_maestro, fk_carrera);

  try {
    const newMateria = await materia.create(
      {
        nombre,
        horas,
        faltas_permitidas,
        fk_maestro,
        fk_carrera
      },
      {
        fields: [
          "nombre",
          "horas",
          "faltas_permitidas",
          "fk_maestro",
          "fk_carrera"
        ]
      }
    );

    if (newMateria) {
      return res.json({
        message: "Materia Creada",
        data: newMateria
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteMateria(req, res) {
  const { id_materia } = req.params;

  try {
    const deleteMat = await materia.destroy({
      where: { id_materia }
    });

    res.json({
      message: "Materia Eliminada",
      count: deleteMat
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateMateria(req, res) {
  const { id_materia } = req.params;
  const { nombre, horas, faltas_permitidas, fk_maestro, fk_carrera } = req.body;
  console.log(nombre, horas, faltas_permitidas, fk_maestro, fk_carrera);

  try {
    const materiaNueva = await materia.findAll({
      atributes: [
        "nombre",
        "horas",
        "faltas_permitidas",
        "fk_maestro",
        "fk_carrera"
      ],
      where: { id_materia }
    });

    if (materiaNueva.length > 0) {
      materiaNueva.forEach(async nueva => {
        await nueva.update({
          nombre,
          horas,
          faltas_permitidas,
          fk_maestro,
          fk_carrera
        });
      });
      return res.json({
        message: "Materia actualizada",
        data: materiaNueva
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getMateriaByCarrera(req, res) {
  const { fk_carrera } = req.params;

  try {
    const byCarrera = await materia.findAll({
      where: { fk_carrera },
      atributes: [
        "nombre",
        "horas",
        "faltas_permitidas",
        "fk_maestro",
        "fk_carrera"
      ], include: [
        {
          model: carrera,
          as: "materiaCarrera"
          // model : maestro , as : 'materiaMaestro'
        },
        {
          model: maestro,
          as: "materiaMaestro"
        }
      ]
    });

    res.json({
      byCarrera
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getMateria,
  getOneMateria,
  createMateria,
  deleteMateria,
  updateMateria,
  getMateriaByCarrera
};
