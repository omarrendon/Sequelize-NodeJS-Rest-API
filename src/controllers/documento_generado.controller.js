const doc = require('../models/documento_generado');

async function getDoc(req, res) {
    try {
        const docs = await doc.findAll();
        res.json({
            data : docs
        });
    } catch (error) {
        console.log(error);
        
    }
}

async function getDocByAlumno(req, res) {
    const { fk_alumno_materia } = req.params;
    
    try {
        const byAlumno = await doc.findAll({
            where : {fk_alumno_materia}
        });
        
        res.json({
            data : byAlumno
        });
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    getDoc,
    getDocByAlumno
}