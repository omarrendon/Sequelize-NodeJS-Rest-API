const { Router } = require("express");

const router = Router();

const {
//   getAlumno,
//   getOneAlumno,
  createAlumno
//   updateAlumno,
//   deleteAlumno,
//   getAlumnoByCarrera
} = require("../controllers/alumno.controller");



// router.get("/", getAlumno);

// router.get("/:id_alumno", getOneAlumno);

router.post("/", createAlumno);

// router.delete("/", deleteAlumno);

// router.put("/:id_alumno", updateAlumno);



module.exports = router;
