import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterDrama/RouterAcao/FilmeAcaoController4.js';

const router = express.Router();

router.get('/filmeacao4', FilmesController.listarfilmes)
router.get('/filmeacao4/:id', FilmesController.listarfilmesPorId)
router.post('/filmeacao4', FilmesController.cadastroFilmes)
router.put('/filmeacao4/:id', FilmesController.atualizarFilmes)
router.delete('/filmeacao4/:id', FilmesController.excluirFilmes)

export default router;