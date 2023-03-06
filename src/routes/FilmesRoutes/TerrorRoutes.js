import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmeTerrorController.js';

const router = express.Router();

router.get('/filmeterror', FilmesController.listarfilmes)
router.get('/filmeterror/:id', FilmesController.listarfilmesPorId)
router.post('/filmeterror', FilmesController.cadastroFilmes)
router.put('/filmeterror/:id', FilmesController.atualizarFilmes)
router.delete('/filmeterror/:id', FilmesController.excluirFilmes)

export default router;