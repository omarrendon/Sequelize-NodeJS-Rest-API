const { Router } = require('express');

const router = Router();
const carreraController = require('../controllers/carrera.controller');

router.post('/carrera', carreraController);


module.exports = router;