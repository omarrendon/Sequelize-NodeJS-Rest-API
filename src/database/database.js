const Sequelize = require('sequelize');

const sequelize =  new Sequelize(
    'califcaciones',
    'postgres',
    'password',
    {
        host: 'localhost',
        dialec: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

module.exports = sequelize;