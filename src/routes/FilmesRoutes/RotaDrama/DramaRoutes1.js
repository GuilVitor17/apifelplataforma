import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/FilmeDramaController1.js';

const router = express.Router();

router.get('/filmedrama1', FilmesController.listarfilmes)
router.get('/filmedrama1/:id', FilmesController.listarfilmesPorId)
router.post('/filmedrama1', FilmesController.cadastroFilmes)
router.put('/filmedrama1/:id', FilmesController.atualizarFilmes)
router.delete('/filmedrama1/:id', FilmesController.excluirFilmes)

export default router;