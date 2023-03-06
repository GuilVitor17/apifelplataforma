import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterComedia/FilmeComediaController4.js';

const router = express.Router();

router.get('/filmecomedia4', FilmesController.listarfilmes)
router.get('/filmecomedia4/:id', FilmesController.listarfilmesPorId)
router.post('/filmecomedia4', FilmesController.cadastroFilmes)
router.put('/filmecomedia4/:id', FilmesController.atualizarFilmes)
router.delete('/filmecomedia4/:id', FilmesController.excluirFilmes)

export default router;