import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroCarrosselController.js'; 

const router = express.Router();



router.get('/livroscarrossel', LivroController.listarLivros)
router.get('/livroscarrossel/:id', LivroController.listarLivrosPorId)
router.post('/livroscarrossel', LivroController.cadastroLivro)
router.put('/livroscarrossel/:id', LivroController.atualizarLivro)
router.delete('/livroscarrossel/:id', LivroController.excluirLivro)

export default router;