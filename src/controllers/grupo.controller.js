const grupo = require("../models/grupo");

async function getGrupo(req, res) {
  try {
    const grupos = await grupo.findAll();
    res.json({
      data: grupos
    });
  } catch (err) {
    console.log(err);
  }
}

async function getOneGrupo(req, res) {
  const { id_grupo } = req.params;
  console.log(id_grupo);
  try {
    const grupoId = await grupo.findOne({
      where: { id_grupo }
    });
    res.json({
      data: grupoId
    });
  } catch (err) {
    console.log(err);
  }
}

async function createGrupo(req, res) {
  const { clave_grupo, turno, clave_cuatrimestre, aula } = req.body;
  console.log(clave_grupo, turno, clave_cuatrimestre, aula);

  try {
    const newGrupo = await grupo.create(
      {
        clave_grupo,
        turno,
        clave_cuatrimestre,
        aula
      },
      {
        fields: ["clave_grupo", "turno", "clave_cuatrimestre", "aula"]
      }
    );

    if (newGrupo) {
      return res.json({
        message: "Grupo creado!!",
        data: newGrupo
      });
    }
  } catch (err) {
    console.log(err);
  }
}

async function deleteGrupo(req, res) {
  const { id_grupo } = req.params;

  try {
    const eliminarGrupo = await grupo.destroy({
      where: { id_grupo }
    });
    res.json({
      message: "Eliminado correctamente!",
      count: eliminarGrupo
    });
  } catch (err) {}
}

async function updateGrupo(req, res) {
    const { id_grupo} = req.params;
    const {  clave_grupo, turno, clave_cuatrimestre, aula} = req.body;

    try {
        const grupoUpdate = await grupo.findAll({
            atributes: [
                "clave_grupo",
                "turno",
                "clave_cuatrimestre",
                "matricula",
                "aula"
              ],
              where: { id_grupo }
        });

        if(grupoUpdate.length > 0) {
            grupoUpdate.forEach( async nuevoGrupo => {
                await nuevoGrupo.update({
                    clave_grupo, turno, clave_cuatrimestre, aula
                });
            });
        }

        res.json({
            message : "Grupo actualizado",
            data : grupoUpdate
        });

    } catch (err) {
        console.log(err);
    }

}
module.exports = {
  getGrupo,
  getOneGrupo,
  createGrupo,
  deleteGrupo,
  updateGrupo
};
