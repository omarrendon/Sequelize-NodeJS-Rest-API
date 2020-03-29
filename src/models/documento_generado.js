const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const doc = sequelize.define('documento_generado' , {
    id_documento_generado : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    fk_alumno_materia : {
        type :Sequelize.STRING
    },
    fk_periodo : {
        type :Sequelize.STRING
    },
    fk_asistencias : {
        type :Sequelize.STRING
    }
}, {
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false
});

module.exports = doc;