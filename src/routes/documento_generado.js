const {Router} = require('express');

const router = Router();

const { getDoc, getDocByAlumno } = require('../controllers/documento_generado.controller');

router.get('/', getDoc);
router.get('/alumno/:fk_alumno_materia', getDocByAlumno);
module.exports = router;