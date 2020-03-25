const { Router } = require('express');

const router = Router();

const {getMaestro, getOneMaestro, createMaestro, deleteMaestro, updateMaestro} = require('../controllers/maestro.controller');

router.get('/', getMaestro);
router.get('/:id_maestro', getOneMaestro);
router.post('/', createMaestro);
router.delete('/:id_maestro', deleteMaestro);
router.post('/', updateMaestro)
module.exports = router;