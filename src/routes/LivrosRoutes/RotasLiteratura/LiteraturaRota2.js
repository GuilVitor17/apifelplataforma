import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterLiteratura/LivroLiteraturaControllers2.js'

const router = express.Router();



router.get('/literatura2', LivroController.listarLivros)
router.get('/literatura2/:id', LivroController.listarLivrosPorId)
router.post('/literatura2', LivroController.cadastroLivro)
router.put('/literatura2/:id', LivroController.atualizarLivro)
router.delete('/literatura2/:id', LivroController.excluirLivro)

export default router;