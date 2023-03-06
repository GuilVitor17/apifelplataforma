import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterRomance/LivroRomanceControllers3.js'

const router = express.Router();



router.get('/romance3', LivroController.listarLivros)
router.get('/romance3/:id', LivroController.listarLivrosPorId)
router.post('/romance3', LivroController.cadastroLivro)
router.put('/romance3/:id', LivroController.atualizarLivro)
router.delete('/romance3/:id', LivroController.excluirLivro)

export default router;