import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterRomance/FilmeRomanceController5.js';

const router = express.Router();

router.get('/filmeromance1', FilmesController.listarfilmes)
router.get('/filmeromance1/:id', FilmesController.listarfilmesPorId)
router.post('/filmeromance1', FilmesController.cadastroFilmes)
router.put('/filmeromance1/:id', FilmesController.atualizarFilmes)
router.delete('/filmeromance1/:id', FilmesController.excluirFilmes)

export default router;