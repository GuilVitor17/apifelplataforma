import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterRomance/LivroRomanceControllers5.js'

const router = express.Router();



router.get('/romance5', LivroController.listarLivros)
router.get('/romance5/:id', LivroController.listarLivrosPorId)
router.post('/romance5', LivroController.cadastroLivro)
router.put('/romance5/:id', LivroController.atualizarLivro)
router.delete('/romance5/:id', LivroController.excluirLivro)

export default router;