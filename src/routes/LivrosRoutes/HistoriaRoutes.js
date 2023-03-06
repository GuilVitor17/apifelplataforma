import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroHistoriaController.js'; 

const router = express.Router();



router.get('/historia', LivroController.listarLivros)
router.get('/historia/:id', LivroController.listarLivrosPorId)
router.post('/historia', LivroController.cadastroLivro)
router.put('/historia/:id', LivroController.atualizarLivro)
router.delete('/historia/:id', LivroController.excluirLivro)

export default router;