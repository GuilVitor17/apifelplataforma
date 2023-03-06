import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmeAcaoController.js';

const router = express.Router();

router.get('/filmeacao', FilmesController.listarfilmes)
router.get('/filmeacao/:id', FilmesController.listarfilmesPorId)
router.post('/filmeacao', FilmesController.cadastroFilmes)
router.put('/filmeacao/:id', FilmesController.atualizarFilmes)
router.delete('/filmeacao/:id', FilmesController.excluirFilmes)

export default router;