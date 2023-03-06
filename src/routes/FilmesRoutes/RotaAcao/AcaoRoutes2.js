import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/RouterAcao/FilmeAcaoController2.js';

const router = express.Router();

router.get('/filmeacao2', FilmesController.listarfilmes)
router.get('/filmeacao2/:id', FilmesController.listarfilmesPorId)
router.post('/filmeacao2', FilmesController.cadastroFilmes)
router.put('/filmeacao2/:id', FilmesController.atualizarFilmes)
router.delete('/filmeacao2/:id', FilmesController.excluirFilmes)

export default router;