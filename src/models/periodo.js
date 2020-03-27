const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const periodo = sequelize.define('periodo' , {
    id_periodo : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    anio : {
        type : Sequelize.STRING
    },
    periodo : {
        type : Sequelize.STRING
    }
}, {
    timestamp : false, freezeTableName: true, createdAt: false, updatedAt: false
});

module.exports = periodo;