const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const carrera = require('./carrera');

const alumno = sequelize.define('alumno' , {
    id_alumo : {
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
    fk_carrera : {
        type :Sequelize.INTEGER,
        // references : {
        //     model : {
        //         tablaName : 'carrera'
        //     },
        //     key : 'id_carrera'
        // }
    }
}, {timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false });


// carrera.associate = function(models) {
//     carrera.belongsTo(models.alumno , {
//         as : 'carrera'
//     });
//     return carrera;
// }

module.exports = alumno;