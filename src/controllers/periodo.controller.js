const periodoModel = require('../models/periodo');

async function getPeriodo(req, res) {
    try {
        const periodos = await periodoModel.findAll();
        res.json({
            data: periodos
        });
    } catch (error) {
        console.log(error);
    }
}

async function getOnePeriodo(req, res) {
    const {id_periodo} = req.params;
    console.log(id_periodo);
    
    try {
        const periodoId = await periodoModel.findOne({
            where :{ id_periodo}
        });
        res.json({
            data : periodoId
        });
    } catch (error) {
        console.log(error);
    }
}

async function createPeriodo(req, res) {
const { anio, periodo} = req.body;

try {
    
    const newPeriodo = await periodoModel.create({
        anio, periodo
    }, {
        fields: ["anio" , "periodo"]
    });

    if (newPeriodo) {
        return res.json({
          message: "Periodo creado!",
          data: newPeriodo
        });
      }

} catch (error) {
    console.log(error);
    
}
}

async function deletePeriodo(req , res) {
const { id_periodo } = req.params;
try {
    const eliminarPeriodo = await periodoModel.destroy({
      where: { id_periodo }
    });
    res.json({
      message: "Eliminado correctamente!",
      count: eliminarPeriodo
    });
  } catch (err) {
    console.log(err);
  }
}

async function updatePeriodo(req, res) {
    const { id_periodo } = req.params;
    const {anio, periodo} = req.body;
    
    console.log(id_periodo);
   
    try {
        const periodoUpdate = await periodoModel.findAll({
            atributes : [ "anio", "periodo"],
            where : {id_periodo}
        });

        if(periodoUpdate.length > 0) {
            periodoUpdate.forEach( async nuevoPeriodo => {
                await nuevoPeriodo.update({
                    anio, periodo
                });
            });
            
            return res.json({
                message : 'Periodo actualizado',
                data : periodoUpdate
            });
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPeriodo, 
    getOnePeriodo,
    createPeriodo,
    deletePeriodo,
    updatePeriodo
}