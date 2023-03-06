import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/FilmeDramaController4.js';

const router = express.Router();

router.get('/filmedrama4', FilmesController.listarfilmes)
router.get('/filmedrama4/:id', FilmesController.listarfilmesPorId)
router.post('/filmedrama4', FilmesController.cadastroFilmes)
router.put('/filmedrama4/:id', FilmesController.atualizarFilmes)
router.delete('/filmedrama4/:id', FilmesController.excluirFilmes)

export default router;