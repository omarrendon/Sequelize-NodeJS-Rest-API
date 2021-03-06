const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const materia = require('./materia');

const maestro = sequelize.define('maestro' , {
    id_maestro : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    nombres : {
        type :Sequelize.STRING
    },
    apellido_paterno : {
        type :Sequelize.STRING
    },
    apellido_materno : {
        type :Sequelize.STRING
    },
    matricula : {
        type :Sequelize.STRING
    },
    contrasenia : {
        type :Sequelize.STRING
    }
}, {timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false });

// maestro.hasMany(materia);
// materia.belongsTo(maestro);
 

module.exports = maestro;