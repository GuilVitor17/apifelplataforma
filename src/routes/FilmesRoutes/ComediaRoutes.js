import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmeComediaController.js';

const router = express.Router();

router.get('/filmecomedia', FilmesController.listarfilmes)
router.get('/filmecomedia/:id', FilmesController.listarfilmesPorId)
router.post('/filmecomedia', FilmesController.cadastroFilmes)
router.put('/filmecomedia/:id', FilmesController.atualizarFilmes)
router.delete('/filmecomedia/:id', FilmesController.excluirFilmes)

export default router;