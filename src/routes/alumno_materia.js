const {Router} = require('express');

const router = Router();

const {updateAlumno_materia,getAlumno_materia, createAlumno_materia } = require('../controllers/alumno_materia.controller');

router.get('/', getAlumno_materia);
router.post('/', createAlumno_materia);
router.put('/:id_alumno_materia', updateAlumno_materia);

module.exports = router; 