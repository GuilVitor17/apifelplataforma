import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/RouterAcao/FilmeAcaoController1.js';

const router = express.Router();

router.get('/filmeacao1', FilmesController.listarfilmes)
router.get('/filmeacao1/:id', FilmesController.listarfilmesPorId)
router.post('/filmeacao1', FilmesController.cadastroFilmes)
router.put('/filmeacao1/:id', FilmesController.atualizarFilmes)
router.delete('/filmeacao1/:id', FilmesController.excluirFilmes)

export default router;