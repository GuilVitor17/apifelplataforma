import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroRomanceController.js'; 

const router = express.Router();



router.get('/romance', LivroController.listarLivros)
router.get('/romance/:id', LivroController.listarLivrosPorId)
router.post('/romance', LivroController.cadastroLivro)
router.put('/romance/:id', LivroController.atualizarLivro)
router.delete('/romance/:id', LivroController.excluirLivro)

export default router;