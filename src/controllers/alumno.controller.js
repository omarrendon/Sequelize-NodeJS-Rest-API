function crearAlumno(req, res) {
  const { nombre, numero_cuatrimestre, matricula } = req.body;
  console.log(nombre, numero_cuatrimestre, matricula);
  res.send("Alumno Recibido");
}

module.exports = crearAlumno;
