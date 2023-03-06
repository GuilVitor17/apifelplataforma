import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterComedia/FilmeComediaController5.js';

const router = express.Router();

router.get('/filmecomedia5', FilmesController.listarfilmes)
router.get('/filmecomedia5/:id', FilmesController.listarfilmesPorId)
router.post('/filmecomedia5', FilmesController.cadastroFilmes)
router.put('/filmecomedia5/:id', FilmesController.atualizarFilmes)
router.delete('/filmecomedia5/:id', FilmesController.excluirFilmes)

export default router;