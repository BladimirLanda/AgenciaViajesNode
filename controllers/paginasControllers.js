//CONTROLLERS

import { Viaje } from "../models/Viaje.js";
import { Testimonio } from "../models/Testimonios.js";

//req: Petición a Express - res: Respuesta de Express
//.render(): Método de renderizado de vistas
//{}: El segundo parametro del .render() es un objeto que puede contener variables de entorno
//send(): Método de impresión en pantalla -> res.send('Inicio');
const paginaInicio = async (req, res) => {
    const promiseDB = [];

    promiseDB.push( Viaje.findAll( {limit: 3} ) );
    promiseDB.push( Testimonio.findAll( {limit: 3} ) );

    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: "home",
            viajes: resultado[0],
            testimonios: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    });

}

const paginaViajes = async (req, res) => {
    //Consulta DB
    try {
        //.finAll(): Método busca todos de sequelize
        const viajes = await Viaje.findAll();

        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaDetalleViaje = async (req, res) => {
    //req.params: Hace referencia a los parametros establecidos en una URL (:)
    const { viaje } = req.params;

    //Consultas DB
    try {
        //.finOne(): Método busca uno de sequelize
        const resultado = await Viaje.findOne( {where : { slug: viaje } } );

        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}