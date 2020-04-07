const { Router } = require('express');

const router = Router();

const { getCalificacion, updateCalificacion ,createCalificacion, getOneCalificacion ,deleteCalificacion } = require('../controllers/calificacion.controller');

router.get('/', getCalificacion);
router.get('/:id_calificacion', getOneCalificacion);
router.post('/', createCalificacion);
router.delete('/:id_calificacion', deleteCalificacion);
router.put('/:id_calificacion' , updateCalificacion);

module.exports = router;