const { Router } = require('express');

const router = Router();

const {getGrupo, getOneGrupo, createGrupo, deleteGrupo, updateGrupo} = require('../controllers/grupo.controller');

router.get('/', getGrupo);
router.get('/:id_grupo', getOneGrupo);

router.post('/', createGrupo);

router.delete('/:id_grupo' , deleteGrupo);

router.put('/:id_grupo', updateGrupo);

module.exports = router;