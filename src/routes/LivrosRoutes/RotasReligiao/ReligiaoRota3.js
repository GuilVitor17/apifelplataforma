import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterReligiao/LivroReligiaoControllers3.js'

const router = express.Router();



router.get('/religiao3', LivroController.listarLivros)
router.get('/religiao3/:id', LivroController.listarLivrosPorId)
router.post('/religiao3', LivroController.cadastroLivro)
router.put('/religiao3/:id', LivroController.atualizarLivro)
router.delete('/religiao3/:id', LivroController.excluirLivro)

export default router;