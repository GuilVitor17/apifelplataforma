import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDesenho/FilmeDesenhoController3.js';

const router = express.Router();

router.get('/filmedesenho3', FilmesController.listarfilmes)
router.get('/filmedesenho3/:id', FilmesController.listarfilmesPorId)
router.post('/filmedesenho3', FilmesController.cadastroFilmes)
router.put('/filmedesenho3/:id', FilmesController.atualizarFilmes)
router.delete('/filmedesenho3/:id', FilmesController.excluirFilmes)

export default router;