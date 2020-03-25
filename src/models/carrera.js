const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const alumno = require('./alumno');

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

carrera.hasMany(alumno);
// constraints: flase
alumno.belongsTo(carrera);


module.exports = carrera;