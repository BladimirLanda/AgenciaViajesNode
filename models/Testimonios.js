//MODEL | Testimonios

import Sequelize from "sequelize";
import db from "../config/db.js";

//.define(): Método de definición de la tabla de acceso
export const Testimonio = db.define('testimonios', {
    //id definido por default
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});