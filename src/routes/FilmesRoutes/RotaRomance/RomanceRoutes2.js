import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterRomance/FilmeRomanceController2.js';

const router = express.Router();

router.get('/filmeromance2', FilmesController.listarfilmes)
router.get('/filmeromance2/:id', FilmesController.listarfilmesPorId)
router.post('/filmeromance2', FilmesController.cadastroFilmes)
router.put('/filmeromance2/:id', FilmesController.atualizarFilmes)
router.delete('/filmeromance2/:id', FilmesController.excluirFilmes)

export default router;