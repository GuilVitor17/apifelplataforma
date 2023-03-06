import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterRomance/FilmeRomanceController3.js';

const router = express.Router();

router.get('/filmeromance3', FilmesController.listarfilmes)
router.get('/filmeromance3/:id', FilmesController.listarfilmesPorId)
router.post('/filmeromance3', FilmesController.cadastroFilmes)
router.put('/filmeromance3/:id', FilmesController.atualizarFilmes)
router.delete('/filmeromance3/:id', FilmesController.excluirFilmes)

export default router;