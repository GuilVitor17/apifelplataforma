import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDesenho/FilmeDesenhoController4.js';

const router = express.Router();

router.get('/filmedesenho4', FilmesController.listarfilmes)
router.get('/filmedesenho4/:id', FilmesController.listarfilmesPorId)
router.post('/filmedesenho4', FilmesController.cadastroFilmes)
router.put('/filmedesenho4/:id', FilmesController.atualizarFilmes)
router.delete('/filmedesenho4/:id', FilmesController.excluirFilmes)

export default router;