import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterLiteratura/LivroLiteraturaControllers5.js'

const router = express.Router();



router.get('/literatura5', LivroController.listarLivros)
router.get('/literatura5/:id', LivroController.listarLivrosPorId)
router.post('/literatura5', LivroController.cadastroLivro)
router.put('/literatura5/:id', LivroController.atualizarLivro)
router.delete('/literatura5/:id', LivroController.excluirLivro)

export default router;