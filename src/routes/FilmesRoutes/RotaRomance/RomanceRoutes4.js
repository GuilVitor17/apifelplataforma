import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterRomance/FilmeRomanceController4.js';

const router = express.Router();

router.get('/filmeromance4', FilmesController.listarfilmes)
router.get('/filmeromance4/:id', FilmesController.listarfilmesPorId)
router.post('/filmeromance4', FilmesController.cadastroFilmes)
router.put('/filmeromance4/:id', FilmesController.atualizarFilmes)
router.delete('/filmeromance4/:id', FilmesController.excluirFilmes)

export default router;