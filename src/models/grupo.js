const Sequelize = require('sequelize');
const sequelize = require('../database/database');


const grupo = sequelize.define('grupo' , {
    id_grupo : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    clave_grupo : {
        type : Sequelize.INTEGER
    },
    turno : {
        type : Sequelize.STRING
    },
    clave_cuatrimestre : {
        type : Sequelize.STRING
    },
    aula : {
        type : Sequelize.STRING
    }
},{
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false 
});

module.exports = grupo;