import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDesenho/FilmeDesenhoController2.js';

const router = express.Router();

router.get('/filmedesenho2', FilmesController.listarfilmes)
router.get('/filmedesenho2/:id', FilmesController.listarfilmesPorId)
router.post('/filmedesenho2', FilmesController.cadastroFilmes)
router.put('/filmedesenho2/:id', FilmesController.atualizarFilmes)
router.delete('/filmedesenho2/:id', FilmesController.excluirFilmes)

export default router;