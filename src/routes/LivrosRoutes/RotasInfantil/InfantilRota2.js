import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterInfantil/LivroInfantilControllers2.js'

const router = express.Router();



router.get('/infantil2', LivroController.listarLivros)
router.get('/infantil2/:id', LivroController.listarLivrosPorId)
router.post('/infantil2', LivroController.cadastroLivro)
router.put('/infantil2/:id', LivroController.atualizarLivro)
router.delete('/infantil2/:id', LivroController.excluirLivro)

export default router;