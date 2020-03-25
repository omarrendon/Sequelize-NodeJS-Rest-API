const { Router } = require('express');

const router = Router();

const {getMaestro} = require('../controllers/maestro.controller');

router.get('/', getMaestro);


module.exports = router;