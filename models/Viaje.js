//MODEL | Viajes

import Sequelize from "sequelize";
import db from "../config/db.js";

//.define(): Método de definición de la tabla de acceso
export const Viaje = db.define('viajes', {
    //id definido por default
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    //SLUG: es una parte de un enlace que identifica un contenido específico en una página web
    slug: {
        type: Sequelize.STRING
    }
});