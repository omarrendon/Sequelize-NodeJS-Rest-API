const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const alumno = require('./alumno');
const materia = require('./materia');

const carrera =  sequelize.define('carrera' , {
    id_carrera : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    nombre : {
        type : Sequelize.STRING
    },
    numero_cuatrimestre: {
        type: Sequelize.INTEGER
    },
    matricula : {
        type : Sequelize.STRING
    }
},{ timestamps : false, freezeTableName: true}  );


// carrera.associate = function(models) {
//     carrera.belongsTo(alumno , {
//         as : 'carrera'
//     });
//     return carrera;
// }

// carrera.hasMany(alumno);
// // carrera.hasMany(materia);
// // constraints: flase 
// carrera.belongsTo(alumno);
// materia.belongsTo(carrera);


module.exports = carrera;