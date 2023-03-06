import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroLiteraturaControllers.js'; 

const router = express.Router();



router.get('/literatura', LivroController.listarLivros)
router.get('/literatura/:id', LivroController.listarLivrosPorId)
router.post('/literatura', LivroController.cadastroLivro)
router.put('/literatura/:id', LivroController.atualizarLivro)
router.delete('/literatura/:id', LivroController.excluirLivro)

export default router;