import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/FilmeDramaController5.js';

const router = express.Router();

router.get('/filmedrama5', FilmesController.listarfilmes)
router.get('/filmedrama5/:id', FilmesController.listarfilmesPorId)
router.post('/filmedrama5', FilmesController.cadastroFilmes)
router.put('/filmedrama5/:id', FilmesController.atualizarFilmes)
router.delete('/filmedrama5/:id', FilmesController.excluirFilmes)

export default router;