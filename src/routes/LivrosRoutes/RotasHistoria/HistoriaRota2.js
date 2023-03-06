import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterHistoria/LivroHistoriaControllers2.js'

const router = express.Router();



router.get('/historia2', LivroController.listarLivros)
router.get('/historia2/:id', LivroController.listarLivrosPorId)
router.post('/historia2', LivroController.cadastroLivro)
router.put('/historia2/:id', LivroController.atualizarLivro)
router.delete('/historia2/:id', LivroController.excluirLivro)

export default router;