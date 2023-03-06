import express from 'express';
import FilmesController from '../../../controllers/filmesControllers/RouterTerror/FilmeTerrorController2.js';

const router = express.Router();

router.get('/filmeterror3', FilmesController.listarfilmes)
router.get('/filmeterror3/:id', FilmesController.listarfilmesPorId)
router.post('/filmeterror3', FilmesController.cadastroFilmes)
router.put('/filmeterror3/:id', FilmesController.atualizarFilmes)
router.delete('/filmeterror3/:id', FilmesController.excluirFilmes)

export default router;