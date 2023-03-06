import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterRomance/LivroRomanceControllers4.js'

const router = express.Router();



router.get('/romance4', LivroController.listarLivros)
router.get('/romance4/:id', LivroController.listarLivrosPorId)
router.post('/romance4', LivroController.cadastroLivro)
router.put('/romance4/:id', LivroController.atualizarLivro)
router.delete('/romance4/:id', LivroController.excluirLivro)

export default router;