import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterLiteratura/LivroLiteraturaControllers4.js'

const router = express.Router();



router.get('/literatura4', LivroController.listarLivros)
router.get('/literatura4/:id', LivroController.listarLivrosPorId)
router.post('/literatura4', LivroController.cadastroLivro)
router.put('/literatura4/:id', LivroController.atualizarLivro)
router.delete('/literatura4/:id', LivroController.excluirLivro)

export default router;