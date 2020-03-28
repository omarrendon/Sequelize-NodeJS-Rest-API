const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const calificacion = sequelize.define('calificacion' , {
    id_calificacion : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    bimestre_uno : {
        type : Sequelize.DOUBLE
    },
    bimestre_dos : {
        type : Sequelize.DOUBLE
    },
    ordinario : {
        type : Sequelize.DOUBLE
    },
    promedio_bimestral : {
        type : Sequelize.DOUBLE
    },
    promedio_final : {
        type : Sequelize.DOUBLE
    },
    extraordinario : {
        type : Sequelize.DOUBLE
    },
    titulo : {
        type : Sequelize.DOUBLE
    },
    insuficiencia : {
        type : Sequelize.DOUBLE
    },
}, {
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false  
});

module.exports = calificacion;