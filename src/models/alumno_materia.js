const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const alumno_materia = sequelize.define('alumno_materia' , {
    id_alumno_materia : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    faltas_totales : {
        type : Sequelize.INTEGER
    },
    fk_alumno : {
        type : Sequelize.INTEGER,
    },
    fk_materia : {
        type : Sequelize.INTEGER,
    },
    fk_grupo :{
        type : Sequelize.INTEGER,
    },
    fk_calificacion : {
        type : Sequelize.INTEGER,
    }
} , {
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false
});

module.exports = alumno_materia;