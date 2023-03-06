import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmeDramaController.js';

const router = express.Router();

router.get('/filmedrama', FilmesController.listarfilmes)
router.get('/filmedrama/:id', FilmesController.listarfilmesPorId)
router.post('/filmedrama', FilmesController.cadastroFilmes)
router.put('/filmedrama/:id', FilmesController.atualizarFilmes)
router.delete('/filmedrama/:id', FilmesController.excluirFilmes)

export default router;