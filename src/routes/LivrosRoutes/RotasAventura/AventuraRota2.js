import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterAventura/LivroAventuraControllers2.js'

const router = express.Router();



router.get('/aventura2', LivroController.listarLivros)
router.get('/aventura2/:id', LivroController.listarLivrosPorId)
router.post('/aventura2', LivroController.cadastroLivro)
router.put('/aventura2/:id', LivroController.atualizarLivro)
router.delete('/aventura2/:id', LivroController.excluirLivro)

export default router;