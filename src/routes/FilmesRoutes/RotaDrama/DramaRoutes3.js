import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/FilmeDramaController4.js';

const router = express.Router();

router.get('/filmedrama3', FilmesController.listarfilmes)
router.get('/filmedrama3/:id', FilmesController.listarfilmesPorId)
router.post('/filmedrama3', FilmesController.cadastroFilmes)
router.put('/filmedrama3/:id', FilmesController.atualizarFilmes)
router.delete('/filmedrama3/:id', FilmesController.excluirFilmes)

export default router;