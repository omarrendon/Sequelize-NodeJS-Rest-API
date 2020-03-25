const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const administrador = sequelize.define("administrador", {
    id_administrador : {
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
}, {
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false  
});
	
module.exports = administrador;