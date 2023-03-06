import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterLiteratura/LivroLiteraturaControllers3.js'

const router = express.Router();



router.get('/literatura3', LivroController.listarLivros)
router.get('/literatura3/:id', LivroController.listarLivrosPorId)
router.post('/literatura3', LivroController.cadastroLivro)
router.put('/literatura3/:id', LivroController.atualizarLivro)
router.delete('/literatura3/:id', LivroController.excluirLivro)

export default router;