const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const asistencias = sequelize.define("asistencias", {
    id_asistencias : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    numero_asistencias : {
        type : Sequelize.INTEGER
    },
    fk_materia : {
        type : Sequelize.INTEGER
    },
    fk_alumno : {
        type : Sequelize.INTEGER
    }
},{
    timestamp: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });

module.exports = asistencias;
