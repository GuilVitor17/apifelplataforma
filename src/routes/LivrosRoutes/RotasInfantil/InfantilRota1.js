import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterInfantil/LivroInfantilControllers1.js'

const router = express.Router();



router.get('/infantil1', LivroController.listarLivros)
router.get('/infantil1/:id', LivroController.listarLivrosPorId)
router.post('/infantil1', LivroController.cadastroLivro)
router.put('/infantil1/:id', LivroController.atualizarLivro)
router.delete('/infantil1/:id', LivroController.excluirLivro)

export default router;