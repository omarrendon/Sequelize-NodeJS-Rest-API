const administrador = require("../models/administrador");

async function getAdministrador(req, res) {
  try {
    const administradores = await administrador.findAll();
    res.json({
      data: administradores
    });
  } catch (err) {
    console.log(err);
  }
}

async function getOneAdministrador(req, res) {
  const { id_administrador } = req.params;
  try {
    const id = await administrador.findOne({
      where: { id_administrador }
    });
    res.json({
      data: id
    });
  } catch (error) {
    console.log(error);
  }
}

async function createAdministrador(req, res) {
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
    const newAdmin = await administrador.create(
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
    
    if(newAdmin) {
        return res.json({
            message : 'Administrador Creado!!',
            data : newAdmin
        })
    }


  } catch (error) {
    console.log(error);
  }
}

async function deleteAdministrador(req, res) {
    const { id_administrador } = req.params;
  try {
    const eliminarAdmin = await administrador.destroy({
      where: { id_administrador }
    });
    res.json({
      message: "Eliminado correctamente!",
      count: eliminarAdmin
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateAdministrador(req, res) {
    const { id_administrador } = req.params;
  const {
    nombres,
    apellido_paterno,
    apellido_materno,
    matricula,
    contrasenia
  } = req.body;

  try {
    const adminUpdate = await administrador.findAll({
      atributes: [
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "matricula",
        "contrasenia"
      ],
      where: {
        id_administrador
      }
    });

    
    if (adminUpdate.length > 0) {
        adminUpdate.forEach(async nuevoAdmin => {
        await nuevoAdmin.update({
            nombres,
            apellido_paterno,
            apellido_materno,
            matricula,
            contrasenia
        });
      });
      return res.json({
        message: "Aministrador Actualizado",
        data: adminUpdate
      });

    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAdministrador,
  getOneAdministrador,
  createAdministrador,
  deleteAdministrador,
  updateAdministrador
};
