const carrera = require("../models/carrera");

// SELECT * FROM CARRERA
async function getCarrera(req, res) {
  try {
    const carreras = await carrera.findAll({
      attributes : ['id_carrera', 'nombre', 'numero_cuatrimestre', 'matricula']
    });
    res.json(
      carreras
    );
  } catch (err) {
    console.log(err);
  }
}

// SELECT * FROM CARRERA WHERE ID = ID
async function getOneCarrera(req, res) {
  const { id_carrera } = req.params;
  console.log(id_carrera);

  try {
    const carreraId = await carrera.findOne({
      where: {
        id_carrera: id_carrera
      }
    });
    res.json({
      data: carreraId
    });
  } catch (err) {
    console.log("ERROR ==" + err);
  }
}

// CREATE CARRERA
async function crearCarrera(req, res) {
  const { nombre, numero_cuatrimestre, matricula } = req.body;
  console.log(nombre, numero_cuatrimestre, matricula);

  try {
    let newCarrera = await carrera.create(
      {
        nombre,
        numero_cuatrimestre,
        matricula
      },
      {
        fields: ["nombre", "numero_cuatrimestre", "matricula"]
      }
    );

    if (newCarrera) {
      return res.json({
        message: "Carrera creada!",
        data: newCarrera
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Salio mal",
      data: {}
    });
  }
}

// DELETE CARRERA
async function deleteCarrera(req, res) {
  const { id_carrera } = req.params;
  try {
    const eliminar = await carrera.destroy({
      where: {
        id_carrera
      }
    });
    res.json({
      message: "Eliminado correctamente!",
      count: eliminar
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "FALLO LA ELIMINACIÓN",
      data: {}
    });
  }
}

async function updateCarrera(req, res) {
  const { id_carrera } = req.params;
  const { nombre, numero_cuatrimestre, matricula } = req.body;

  try {
    const carreraUpdate = await carrera.findAll({
      atributes: ["nombre", "numero_cuatrimestre", "matricula"],
      where: {
        id_carrera
      }
    });

    if (carreraUpdate.length > 0) {
      carreraUpdate.forEach(async carreraNueva => {
        await carreraNueva.update({
          nombre,
          numero_cuatrimestre,
          matricula
        });
      });
      return res.json({
        message: "Carrera Updated",
        data: carreraUpdate
      });
    }

  } catch (err) {
    console.log(err);
    res.json({
      message: "Cannot update this Project.",
      data: {}
    });
  }
}

module.exports = {
  crearCarrera,
  getCarrera,
  getOneCarrera,
  deleteCarrera,
  updateCarrera
};
