import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterRomance/LivroRomanceControllers1.js'

const router = express.Router();



router.get('/romance1', LivroController.listarLivros)
router.get('/romance1/:id', LivroController.listarLivrosPorId)
router.post('/romance1', LivroController.cadastroLivro)
router.put('/romance1/:id', LivroController.atualizarLivro)
router.delete('/romance1/:id', LivroController.excluirLivro)

export default router;