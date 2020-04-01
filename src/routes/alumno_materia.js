const {Router} = require('express');

const router = Router();

const {updateAlumno_materia,getAlumno_materia, getAlumno_materiaByAlumno ,createAlumno_materia } = require('../controllers/alumno_materia.controller');

router.get('/', getAlumno_materia);
router.get('/alumno/:fk_alumno' , getAlumno_materiaByAlumno);
router.post('/', createAlumno_materia);
router.put('/:id_alumno_materia', updateAlumno_materia);

module.exports = router; 