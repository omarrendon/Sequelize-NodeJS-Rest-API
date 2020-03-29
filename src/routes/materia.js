const { Router } = require('express');

const router = Router();

const {getMateria, getMateriaByCarrera, updateMateria,getOneMateria, deleteMateria, createMateria} = require('../controllers/materia.controller');

router.get('/', getMateria);
router.get('/:id_materia', getOneMateria);
router.post('/', createMateria);
router.delete('/:id_materia', deleteMateria);
router.put('/:id_materia', updateMateria);

router.get('/carrera/:fk_carrera', getMateriaByCarrera);
module.exports = router;