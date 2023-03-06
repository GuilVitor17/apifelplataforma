import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/RouterAcao/FilmeAcaoController3.js';

const router = express.Router();

router.get('/filmeacao3', FilmesController.listarfilmes)
router.get('/filmeacao3/:id', FilmesController.listarfilmesPorId)
router.post('/filmeacao3', FilmesController.cadastroFilmes)
router.put('/filmeacao3/:id', FilmesController.atualizarFilmes)
router.delete('/filmeacao3/:id', FilmesController.excluirFilmes)

export default router;