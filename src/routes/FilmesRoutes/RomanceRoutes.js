import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmeRomanceController.js';

const router = express.Router();

router.get('/filmeromance', FilmesController.listarfilmes)
router.get('/filmeromance/:id', FilmesController.listarfilmesPorId)
router.post('/filmeromance', FilmesController.cadastroFilmes)
router.put('/filmeromance/:id', FilmesController.atualizarFilmes)
router.delete('/filmeromance/:id', FilmesController.excluirFilmes)

export default router;