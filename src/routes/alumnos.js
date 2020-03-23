const { Router } = require('express');

const router = Router();
const alumnoController = require('../controllers/alumno.controller');

router.get('/alumno', (req, res )=> {
    res.send('alumno');
});

router.post('/alumno', alumnoController);

module.exports = router;