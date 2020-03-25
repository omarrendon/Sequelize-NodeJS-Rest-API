const maestro = require("../models/maestro");

// SELECT * FROM ALUMNO
async function getMaestro (req, res) {
    try{
        const maestros = await maestro.findAll();
        res.json({
            data : maestros
        });
    } catch (err) {
        console.log(err);
    }
}



// async function getMaestro(req, res) {
//   try {
//     const maestros = await maestro.findAll({
//         attributes : ['nombres', 'apellido_paterno', 'apellido_materno', 'matricula', 'password'],
//         order: [["nombres", "DESC"]]
//     });

//     res.json(maestros);

//   } catch (err) {
//     console.log(err);
//   }
// }
module.exports = {
    getMaestro
}
