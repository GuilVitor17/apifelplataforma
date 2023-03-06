import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDesenho/FilmeDesenhoController1.js';

const router = express.Router();

router.get('/filmedesenho1', FilmesController.listarfilmes)
router.get('/filmedesenho1/:id', FilmesController.listarfilmesPorId)
router.post('/filmedesenho1', FilmesController.cadastroFilmes)
router.put('/filmedesenho1/:id', FilmesController.atualizarFilmes)
router.delete('/filmedesenho1/:id', FilmesController.excluirFilmes)

export default router;