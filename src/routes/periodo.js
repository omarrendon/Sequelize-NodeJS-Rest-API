const { Router } = require('express');

const router = Router();

const {getPeriodo, getOnePeriodo, updatePeriodo ,deletePeriodo, createPeriodo} = require('../controllers/periodo.controller');

router.get('/' , getPeriodo);
router.get('/:id_periodo', getOnePeriodo);
router.post('/', createPeriodo);
router.delete('/:id_periodo', deletePeriodo);
router.put('/:id_periodo', updatePeriodo);

module.exports = router;