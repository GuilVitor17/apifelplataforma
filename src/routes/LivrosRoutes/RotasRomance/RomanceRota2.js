import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterRomance/LivroRomanceControllers2.js'

const router = express.Router();



router.get('/romance2', LivroController.listarLivros)
router.get('/romance2/:id', LivroController.listarLivrosPorId)
router.post('/romance2', LivroController.cadastroLivro)
router.put('/romance2/:id', LivroController.atualizarLivro)
router.delete('/romance2/:id', LivroController.excluirLivro)

export default router;