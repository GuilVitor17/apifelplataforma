import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterInfantil/LivroInfantilControllers4.js'

const router = express.Router();



router.get('/infantil4', LivroController.listarLivros)
router.get('/infantil4/:id', LivroController.listarLivrosPorId)
router.post('/infantil4', LivroController.cadastroLivro)
router.put('/infantil4/:id', LivroController.atualizarLivro)
router.delete('/infantil4/:id', LivroController.excluirLivro)

export default router;