const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const carrera = require('./carrera');

const alumno = sequelize.define('alumno' , {
    id_alumno : {
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
        type :Sequelize.INTEGER
    }
}, {timestamp : false});

alumno.hasMany(carrera, {
    foreingKey : 'id_carrera',
    sourceKey : 'id_alumno'
})
carrera.belongstTo(alumno, {
    foreingKey : 'id_carrera',
    sourceKey : 'id_carrera'
})

module.exports = alumno;