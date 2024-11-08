//Archivo JS para configurar Express.Js

//require(): Método que permite incluir módulos en el código
//const express = require('express'); //Common JS

//import modulo from 'modulo': Método tipo modulosJs que permite immportar módulos en el código
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conexión base de datos
//.authenticate(): Método de autenticación de conexión a la DB. Retorna una promesa
db.authenticate()
    .then( () => console.log('Base de Datos conectada'))
    .catch( error => console.log(error) );

//Definir puerto
//process.env.PORT: Variable de entorno de asignación automática del puerto
const port = process.env.PORT || 4000;

//Habilitar pug
//.set(): Método que establece un complemento o configuración
app.set('view engine', 'pug');

//Middleware personal
//.use(): (Contexto HTTP) Permite montar un middleware sin una petición HTTP específica
//next: Hace referencia a la siguiente declaración en el middleware. En caso de método no nativos Express
app.use( (req, res, next) => {
    //.locals: Objeto de almacen local dentro de la respuesta
    const fecha = new Date();

    res.locals.year = fecha.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";

    next();
});

//.urlncoded: Ejecuta el BodyParser para lectura de datos de un método POST
//.use(): Método de uso generar de recursos para Express
app.use(express.urlencoded({extended: true}));

//Definir la carpeta public
//.static(): Método que define directorios/archivos estáticos en Express.
app.use(express.static('public'));

//Agregar Router
app.use('/', router);

//.listen(): Método de escucha si el primer parametro es true. Imprime en consola NodeJs
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});