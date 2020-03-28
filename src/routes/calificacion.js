const { Router } = require('express');

const router = Router();

const { getCalificacion, updateCalificacion ,createCalificacion, deleteCalificacion } = require('../controllers/calificacion.controller');

router.get('/', getCalificacion);
router.post('/', createCalificacion);
router.delete('/:id_calificacion', deleteCalificacion);
router.put('/:id_calificacion' , updateCalificacion);

module.exports = router;