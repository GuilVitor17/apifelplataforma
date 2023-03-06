import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterRomance/FilmeRomanceController5.js';

const router = express.Router();

router.get('/filmeromance5', FilmesController.listarfilmes)
router.get('/filmeromance5/:id', FilmesController.listarfilmesPorId)
router.post('/filmeromance5', FilmesController.cadastroFilmes)
router.put('/filmeromance5/:id', FilmesController.atualizarFilmes)
router.delete('/filmeromance5/:id', FilmesController.excluirFilmes)

export default router;