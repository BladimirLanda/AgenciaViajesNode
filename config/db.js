//Configuración de la Base de Datos

import dotenv from 'dotenv';
import Sequelize from 'sequelize'; //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

//.config(): Método de implementación de dontenv
dotenv.config();

//new Sequelize(): Nueva intancia de conexión
const db = new Sequelize(process.env.DATABASE_URL, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    //Configuraciones Generales
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;