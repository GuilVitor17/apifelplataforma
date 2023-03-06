import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/FilmeDramaController3.js';

const router = express.Router();

router.get('/filmedrama2', FilmesController.listarfilmes)
router.get('/filmedrama2/:id', FilmesController.listarfilmesPorId)
router.post('/filmedrama2', FilmesController.cadastroFilmes)
router.put('/filmedrama2/:id', FilmesController.atualizarFilmes)
router.delete('/filmedrama2/:id', FilmesController.excluirFilmes)

export default router;