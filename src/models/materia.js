const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const materia = sequelize.define( 'materia', {
    id_materia : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    nombre : {
        type : Sequelize.STRING
    },
    horas : {
        type : Sequelize.INTEGER
    },
    faltas_permitidas : {
        type : Sequelize.INTEGER
    },
    fk_maestro : {
        type : Sequelize.INTEGER
    },
    fk_carrera : {
        type : Sequelize.INTEGER
    }
},{
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false  
});



module.exports = materia;