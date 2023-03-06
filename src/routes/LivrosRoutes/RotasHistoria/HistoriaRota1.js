import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterHistoria/LivroHistoriaControllers1.js'

const router = express.Router();



router.get('/historia1', LivroController.listarLivros)
router.get('/historia1/:id', LivroController.listarLivrosPorId)
router.post('/historia1', LivroController.cadastroLivro)
router.put('/historia1/:id', LivroController.atualizarLivro)
router.delete('/historia1/:id', LivroController.excluirLivro)

export default router;