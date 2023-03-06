import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroInfantilController.js'; 

const router = express.Router();



router.get('/infantil', LivroController.listarLivros)
router.get('/infantil/:id', LivroController.listarLivrosPorId)
router.post('/infantil', LivroController.cadastroLivro)
router.put('/infantil/:id', LivroController.atualizarLivro)
router.delete('/infantil/:id', LivroController.excluirLivro)

export default router;