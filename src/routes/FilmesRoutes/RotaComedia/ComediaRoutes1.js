import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterComedia/FilmeComediaController1.js';

const router = express.Router();

router.get('/filmecomedia1', FilmesController.listarfilmes)
router.get('/filmecomedia1/:id', FilmesController.listarfilmesPorId)
router.post('/filmecomedia1', FilmesController.cadastroFilmes)
router.put('/filmecomedia1/:id', FilmesController.atualizarFilmes)
router.delete('/filmecomedia1/:id', FilmesController.excluirFilmes)

export default router;