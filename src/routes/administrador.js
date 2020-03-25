const {Router} = require('express');

const router = Router();

const {getAdministrador, getOneAdministrador, updateAdministrador, createAdministrador, deleteAdministrador} = require('../controllers/administrador.controller');

router.get('/', getAdministrador);
router.get('/:id_administrador', getOneAdministrador);
router.post('/', createAdministrador);
router.delete('/:id_administrador', deleteAdministrador);
router.put('/:id_administrador', updateAdministrador);

module.exports = router;