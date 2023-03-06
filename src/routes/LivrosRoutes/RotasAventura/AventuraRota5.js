import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterAventura/LivroAventuraControllers5.js'

const router = express.Router();



router.get('/aventura5', LivroController.listarLivros)
router.get('/aventura5/:id', LivroController.listarLivrosPorId)
router.post('/aventura5', LivroController.cadastroLivro)
router.put('/aventura5/:id', LivroController.atualizarLivro)
router.delete('/aventura5/:id', LivroController.excluirLivro)

export default router;