import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterAventura/LivroAventuraControllers3.js'

const router = express.Router();



router.get('/aventura3', LivroController.listarLivros)
router.get('/aventura3/:id', LivroController.listarLivrosPorId)
router.post('/aventura3', LivroController.cadastroLivro)
router.put('/aventura3/:id', LivroController.atualizarLivro)
router.delete('/aventura3/:id', LivroController.excluirLivro)

export default router;