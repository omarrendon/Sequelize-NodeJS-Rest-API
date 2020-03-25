const alumno = require('../models/alumno');

// SELECT * FROM ALUMNO
async function getAlumno(req, res) {
  try {
    const alumnos = await alumno.findAll({
      attributes : ['nombres', 'apellido_paterno', 'apellido_materno', 'matricula', 'fk_carrera'],
      order : [
        ['nombres' , 'DESC']
      ]
    });

    res.json(alumnos);

  } catch (err) {
    console.log('ERROR' + err);
  }
}

// SELECT ONLY ONE ALUMNO
async function getOneAlumno(req, res) {
  const {id_alumo} = req.params;
  
  try{
    const oneAlumno = await alumno.findOne({
      where : {id_alumo},
      attributes : [ 'nombres', 'apellido_paterno', 'apellido_materno', 'matricula', 'fk_carrera']
    });
    
    res.json({oneAlumno});

  }catch (err) {
    console.log('ERROR POR BUSQUEDA DE ID' + err); 
  }
}
// CREATE ALUMNO
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

async function updateAlumno(req, res) {
  const {id_alumo} = req.params;
  const {nombres, apellido_paterno, apellido_materno, matricula, fk_carrera} = req.body;
  
  try {
      const id = await alumno.findAll( {
        attributes : [ 'nombres', 'apellido_paterno', 'apellido_materno', 'matricula', 'fk_carrera'],
        where : {
          id_alumo
        }
      });

      const idUpdate = alumno.update({
        nombres, apellido_paterno, apellido_materno, matricula, fk_carrera
      }, {
        where : {id_alumo}
      });

      return res.json({
        message: "Alumno Updated",
        data: id
      });

  } catch (err) {
    console.log('Error : ' +err);
  }
}

async function deleteAlumno(req, res) {
  const {id_alumo} = req.params;
  try{
    const elimnar = await alumno.destroy({
        where : {
          id_alumo
        }
    });
    res.json({
      message : 'Alumno eliminado',
      count : elimnar
    });
  }catch (err) {
    console.log('ERROR :' + err);
  }
}

async function getAlumnoByCarrera(req, res) {
  const { fk_carrera} = req.params;
  
  try  {  
    const byCarrea = await alumno.findAll({
      where : {fk_carrera},
      attributes : [ 'nombres', 'apellido_paterno', 'apellido_materno', 'matricula', 'fk_carrera']
    });
  
    res.json({byCarrea});
    
  }catch (err) {
    console.log('ERROR : ' + err);
  }
}


module.exports = {
  getAlumno,
  getOneAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
  getAlumnoByCarrera
}
