import express from 'express';
import FilmesController from '../../controllers/filmesControllers/FilmeDesenhoController.js';

const router = express.Router();

router.get('/filmedesenho', FilmesController.listarfilmes)
router.get('/filmedesenho/:id', FilmesController.listarfilmesPorId)
router.post('/filmedesenho', FilmesController.cadastroFilmes)
router.put('/filmedesenho/:id', FilmesController.atualizarFilmes)
router.delete('/filmedesenho/:id', FilmesController.excluirFilmes)

export default router;