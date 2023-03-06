import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterInfantil/LivroInfantilControllers3.js'

const router = express.Router();



router.get('/infantil3', LivroController.listarLivros)
router.get('/infantil3/:id', LivroController.listarLivrosPorId)
router.post('/infantil3', LivroController.cadastroLivro)
router.put('/infantil3/:id', LivroController.atualizarLivro)
router.delete('/infantil3/:id', LivroController.excluirLivro)

export default router;