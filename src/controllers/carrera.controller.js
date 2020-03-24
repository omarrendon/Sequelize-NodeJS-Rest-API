const carrera = require("../models/carrera");

async function crearCarrera(req, res) {
  const {nombre, numero_cuatrimestre, matricula} = req.body;
  console.log(nombre, numero_cuatrimestre, matricula);

  try {
    let newCarrera = await carrera.create({
      nombre,
      numero_cuatrimestre,
      matricula
    }, {
        fields : ['nombre', 'numero_cuatrimestre', 'matricula']
    });

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

module.exports = crearCarrera;
