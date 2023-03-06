import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterComedia/FilmeComediaController3.js';

const router = express.Router();

router.get('/filmecomedia3', FilmesController.listarfilmes)
router.get('/filmecomedia3/:id', FilmesController.listarfilmesPorId)
router.post('/filmecomedia3', FilmesController.cadastroFilmes)
router.put('/filmecomedia3/:id', FilmesController.atualizarFilmes)
router.delete('/filmecomedia3/:id', FilmesController.excluirFilmes)

export default router;