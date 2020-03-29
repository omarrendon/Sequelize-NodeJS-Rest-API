const { Router } = require('express');

const router = Router();

const {getAsistencias, createAsistencias, updateAsistencias, getAsistenciasByMateria} = require('../controllers/asistencias.controllers');

router.get('/', getAsistencias);
router.get('/materia/:fk_materia', getAsistenciasByMateria);
router.put('/:id_asistencias', updateAsistencias);
router.post('/', createAsistencias);
module.exports = router;