import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterInfantil/LivroInfantilControllers5.js'

const router = express.Router();



router.get('/infantil5', LivroController.listarLivros)
router.get('/infantil5/:id', LivroController.listarLivrosPorId)
router.post('/infantil5', LivroController.cadastroLivro)
router.put('/infantil5/:id', LivroController.atualizarLivro)
router.delete('/infantil5/:id', LivroController.excluirLivro)

export default router;