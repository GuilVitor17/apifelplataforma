import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterTerror/FilmeTerrorController5.js';

const router = express.Router();

router.get('/filmeterror5', FilmesController.listarfilmes)
router.get('/filmeterror5/:id', FilmesController.listarfilmesPorId)
router.post('/filmeterror5', FilmesController.cadastroFilmes)
router.put('/filmeterror5/:id', FilmesController.atualizarFilmes)
router.delete('/filmeterror5/:id', FilmesController.excluirFilmes)

export default router;