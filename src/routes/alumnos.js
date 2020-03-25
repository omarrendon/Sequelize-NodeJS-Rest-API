const { Router } = require("express");

const router = Router();

const {
  getAlumno,
  getOneAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
  getAlumnoByCarrera
} = require("../controllers/alumno.controller");



router.get("/", getAlumno);
router.get("/:id_alumo", getOneAlumno);
router.post("/", createAlumno);
router.delete("/:id_alumo", deleteAlumno);
router.put("/:id_alumo", updateAlumno);

router.get('/carrera/:fk_carrera', getAlumnoByCarrera);


module.exports = router;
