import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterHistoria/LivroHistoriaControllers4.js'

const router = express.Router();



router.get('/historia4', LivroController.listarLivros)
router.get('/historia4/:id', LivroController.listarLivrosPorId)
router.post('/historia4', LivroController.cadastroLivro)
router.put('/historia4/:id', LivroController.atualizarLivro)
router.delete('/historia4/:id', LivroController.excluirLivro)

export default router;