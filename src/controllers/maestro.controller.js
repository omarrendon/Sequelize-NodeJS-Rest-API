const maestro = require("../models/maestro");

// SELECT * FROM ALUMNO
async function getMaestro(req, res) {
  try {
    const maestros = await maestro.findAll();
    res.json({
      data: maestros
    });
  } catch (err) {
    console.log(err);
  }
}

// Select ONLY ONE MAESTRO BY ID
async function getOneMaestro(req, res) {
  const { id_maestro } = req.params;
  console.log(id_maestro);

  try {
    const maestroId = await maestro.findOne({
      where: {
        id_maestro
      }
    });
    res.json({
      data: maestroId
    });
  } catch (err) {
    console.log(err);
  }
}

// POST maestro
async function createMaestro(req, res) {
  const {
    nombres,
    apellido_paterno,
    apellido_materno,
    matricula,
    contrasenia
  } = req.body;
  console.log(
    nombres,
    apellido_paterno,
    apellido_materno,
    matricula,
    contrasenia
  );

  try {
    let newMaestro = await maestro.create(
      {
        nombres,
        apellido_paterno,
        apellido_materno,
        matricula,
        contrasenia
      },
      {
        fields: [
          "nombres",
          "apellido_paterno",
          "apellido_materno",
          "matricula",
          "contrasenia"
        ]
      }
    );

    if (newMaestro) {
      return res.json({
        message: "Maestro creado!",
        data: newMaestro
      });
    }
  } catch (err) {
    console.log(err);
  }
}

async function deleteMaestro(req, res) {
  const { id_maestro } = req.params;
  try {
    const eliminarMaestro = await maestro.destroy({
      where: { id_maestro }
    });
    res.json({
      message: "Eliminado correctamente!",
      count: eliminarMaestro
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateMaestro(req, res) {
  const { id_maestro } = req.params;
  const {
    nombres,
    apellido_paterno,
    apellido_materno,
    matricula,
    contrasenia
  } = req.body;

  try {
    const maestroUpdate = await maestro.findAll({
      atributes: [
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "matricula",
        "contrasenia"
      ],
      where: {
        id_maestro
      }
    });

    
    if (maestroUpdate.length > 0) {
      maestroUpdate.forEach(async nuevoMaestro => {
        await nuevoMaestro.update({
            nombres,
            apellido_paterno,
            apellido_materno,
            matricula,
            contrasenia
        });
      });
      return res.json({
        message: "Carrera Updated",
        data: maestroUpdate
      });

    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getMaestro,
  getOneMaestro,
  createMaestro,
  deleteMaestro,
  updateMaestro
};
