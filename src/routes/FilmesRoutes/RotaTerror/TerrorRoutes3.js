import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterTerror/FilmeTerrorController3.js';

const router = express.Router();

router.get('/filmeterror4', FilmesController.listarfilmes)
router.get('/filmeterror4/:id', FilmesController.listarfilmesPorId)
router.post('/filmeterror4', FilmesController.cadastroFilmes)
router.put('/filmeterror4/:id', FilmesController.atualizarFilmes)
router.delete('/filmeterror4/:id', FilmesController.excluirFilmes)

export default router;