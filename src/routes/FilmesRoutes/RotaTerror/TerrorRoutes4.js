import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterTerror/FilmeTerrorController4.js';

const router = express.Router();

router.get('/filmeterror2', FilmesController.listarfilmes)
router.get('/filmeterror2/:id', FilmesController.listarfilmesPorId)
router.post('/filmeterror2', FilmesController.cadastroFilmes)
router.put('/filmeterror2/:id', FilmesController.atualizarFilmes)
router.delete('/filmeterror2/:id', FilmesController.excluirFilmes)

export default router;