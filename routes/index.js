//Routing (Rutas)
import express from 'express';
import { paginaInicio, paginaNosotros, 
        paginaViajes, paginaTestimonios, 
        paginaDetalleViaje } from '../controllers/paginasControllers.js';
import { guardarTestimonio } from '../controllers/formularioControllers.js';


//Router(): Método de manejo de enrutamiento.
//Encargado de registrar todas las url´s o endpoints que la aplicación soporta
const router = express.Router();

//.get(): Método de obtención de la página tipo HTTTP
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

//:Registro del parametro comodín
router.get('/viajes/:viaje', paginaDetalleViaje)

router.get('/testimonios', paginaTestimonios);

//.post(): Método de envio a la página tipo HTTP
router.post('/testimonios', guardarTestimonio);

export default router;

/*
MVC (Model-View-Controller) es un patrón de diseño que se utiliza en JavaScript para separar los datos, 
la lógica y la interfaz de usuario de una aplicación. Permite la separación de obligaciones de cada pieza
de código.
*/

/*
Model: Encargado de los datos y la lógica para mostrar los datos
View: Encargado de lo que se visualiza en la pantalla
Controller: Encargado de la comunicación entre el Model y el View. Ejecuta por un llamdado del Router.

Ej: Llamada del router desde /Productos. Ejecuta el Controller que realiza la petición al Model, el Model
regresa la respuesta de la DB al Controller y este manda los resultados a renderizar al View.

*/

//Template Engines (Motores de Plantilla). Son la V-View:
/*
Son herramientas de software que permiten mezclar datos con plantillas para generar documentos que se
renderizan en un navegador. Permiten mostrar la parte visual (HTML) en una aplicación de Express, debido
a que el modelo retorna un objeto (o arreglo) de datos, un template engine permitirá acceder a los 
resultados de una consulta y mostrarlos en pantalla. Ejemplos en Node - Express:Pug - EJS - HBS
*/