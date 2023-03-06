import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterTerror/FilmeTerrorController1.js';

const router = express.Router();

router.get('/filmeterror1', FilmesController.listarfilmes)
router.get('/filmeterror1/:id', FilmesController.listarfilmesPorId)
router.post('/filmeterror1', FilmesController.cadastroFilmes)
router.put('/filmeterror1/:id', FilmesController.atualizarFilmes)
router.delete('/filmeterror1/:id', FilmesController.excluirFilmes)

export default router;