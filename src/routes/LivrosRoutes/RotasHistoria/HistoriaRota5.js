import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterHistoria/LivroHistoriaControllers5.js'

const router = express.Router();



router.get('/historia5', LivroController.listarLivros)
router.get('/historia5/:id', LivroController.listarLivrosPorId)
router.post('/historia5', LivroController.cadastroLivro)
router.put('/historia5/:id', LivroController.atualizarLivro)
router.delete('/historia5/:id', LivroController.excluirLivro)

export default router;