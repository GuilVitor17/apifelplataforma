import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDesenho/FilmeDesenhoController5.js';

const router = express.Router();

router.get('/filmedesenho5', FilmesController.listarfilmes)
router.get('/filmedesenho5/:id', FilmesController.listarfilmesPorId)
router.post('/filmedesenho5', FilmesController.cadastroFilmes)
router.put('/filmedesenho5/:id', FilmesController.atualizarFilmes)
router.delete('/filmedesenho5/:id', FilmesController.excluirFilmes)

export default router;