import express from 'express';
import { paginaInicio, paginaNosotros, 
        paginaViajes, paginaTestimonios, 
        paginaDetalleViaje } from '../controllers/paginasControllers.js';
import { guardarTestimonio } from '../controllers/formularioControllers.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:viaje', paginaDetalleViaje)

router.get('/testimonios', paginaTestimonios);

router.post('/testimonios', guardarTestimonio);

export default router;