import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterLiteratura/LivroLiteraturaControllers1.js'

const router = express.Router();



router.get('/literatura1', LivroController.listarLivros)
router.get('/literatura1/:id', LivroController.listarLivrosPorId)
router.post('/literatura1', LivroController.cadastroLivro)
router.put('/literatura1/:id', LivroController.atualizarLivro)
router.delete('/literatura1/:id', LivroController.excluirLivro)

export default router;