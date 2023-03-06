import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmesCarrosselController.js'; 

const router = express.Router();



router.get('/filmescarrossel', FilmesController.listarfilmes)
router.get('/filmescarrossel/:id', FilmesController.listarfilmesPorId)
router.post('/filmescarrossel', FilmesController.cadastroFilme)
router.put('/filmescarrossel/:id', FilmesController.atualizarFilme)
router.delete('/filmescarrossel/:id', FilmesController.excluirFilme)

export default router;