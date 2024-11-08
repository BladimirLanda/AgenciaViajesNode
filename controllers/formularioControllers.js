//CONTROLLERS
import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonio = async (req, res) => {
    //req.body: Hace referencia al cuerpo de entrada POST (formulario, etc...)
    const { nombre, correo, mensaje } = req.body;

    if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        const testimonios = await Testimonio.findAll();

        const error = 'Error: Todos los campos son obligatorios';

        res.render('testimonios', {
            pagina: 'Testimonios',
            error,
            nombre,
            correo,
            mensaje,
            testimonios
        });

        return;
    }

    try {
        //.create(): Método inserción de registro de sequelize
        await Testimonio.create({
            nombre,
            correo,
            mensaje
        });

        res.redirect('/testimonios');
    } catch (error) {
        console.log(error);
    }


};

export {
    guardarTestimonio
}