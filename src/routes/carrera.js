const { Router } = require('express');

const router = Router();
const {crearCarrera, getCarrera, deleteCarrera, getOneCarrera, updateCarrera} = require('../controllers/carrera.controller');

router.get('/', getCarrera);
router.get('/:id_carrera', getOneCarrera);
router.post('/', crearCarrera);
router.delete('/:id_carrera', deleteCarrera);
router.put('/:id_carrera', updateCarrera);
module.exports = router;