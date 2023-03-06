import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterComedia/FilmeComediaController2.js';

const router = express.Router();

router.get('/filmecomedia2', FilmesController.listarfilmes)
router.get('/filmecomedia2/:id', FilmesController.listarfilmesPorId)
router.post('/filmecomedia2', FilmesController.cadastroFilmes)
router.put('/filmecomedia2/:id', FilmesController.atualizarFilmes)
router.delete('/filmecomedia2/:id', FilmesController.excluirFilmes)

export default router;