import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterHistoria/LivroHistoriaControllers3.js'

const router = express.Router();



router.get('/historia3', LivroController.listarLivros)
router.get('/historia3/:id', LivroController.listarLivrosPorId)
router.post('/historia3', LivroController.cadastroLivro)
router.put('/historia3/:id', LivroController.atualizarLivro)
router.delete('/historia3/:id', LivroController.excluirLivro)

export default router;