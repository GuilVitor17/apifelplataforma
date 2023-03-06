import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterAventura/LivroAventuraControllers4.js'

const router = express.Router();



router.get('/aventura4', LivroController.listarLivros)
router.get('/aventura4/:id', LivroController.listarLivrosPorId)
router.post('/aventura4', LivroController.cadastroLivro)
router.put('/aventura4/:id', LivroController.atualizarLivro)
router.delete('/aventura4/:id', LivroController.excluirLivro)

export default router;