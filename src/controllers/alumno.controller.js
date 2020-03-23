
function crearAlumno( req , res ) {
    console.log(req.body);
    res.send('Alumno Recibido')
}

module.exports = crearAlumno;
