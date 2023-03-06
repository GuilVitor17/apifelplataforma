import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterAventura/LivroAventuraControllers1.js'

const router = express.Router();



router.get('/aventura1', LivroController.listarLivros)
router.get('/aventura1/:id', LivroController.listarLivrosPorId)
router.post('/aventura1', LivroController.cadastroLivro)
router.put('/aventura1/:id', LivroController.atualizarLivro)
router.delete('/aventura1/:id', LivroController.excluirLivro)

export default router;