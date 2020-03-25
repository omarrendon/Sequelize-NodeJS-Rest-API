const alumno = require('../models/alumno');

// SELECT * FROM ALUMNO
// async function getAlumno(req, res) {
//   try {
//     const alumnos = await alumno.findAll();
//     res.json({
//       data: alumnos
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

function getOneAlumno(req, res) {

}

async function createAlumno(req, res) {
  try{
    const {nombres, apellido_paterno, apellido_materno, matricula, fk_carrera} = req.body
    console.log(nombres, apellido_paterno, apellido_materno, matricula, fk_carrera);
    

    let newAlumno = await alumno.create({
      nombres,
      apellido_paterno,
      apellido_materno,
      matricula,
      fk_carrera
    }, {
      fields: ['nombres', 'apellido_paterno', 'apellido_materno', 'matricula', 'fk_carrera']
    });

    res.json({
      message : 'Alumno creado!'
    });


  } catch (err){
    console.log('Error :'+err);
  }



}

function updateAlumno(req, res) {

}

function deleteAlumno(req, res) {

}

function getAlumnoByCarrera(req, res) {

}


module.exports = {
  // getAlumno,
  getOneAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
  getAlumnoByCarrera
}
