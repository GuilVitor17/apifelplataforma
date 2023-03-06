import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/RouterAcao/FilmeAcaoController5.js';

const router = express.Router();

router.get('/filmeacao5', FilmesController.listarfilmes)
router.get('/filmeacao5/:id', FilmesController.listarfilmesPorId)
router.post('/filmeacao5', FilmesController.cadastroFilmes)
router.put('/filmeacao5/:id', FilmesController.atualizarFilmes)
router.delete('/filmeacao5/:id', FilmesController.excluirFilmes)

export default router;