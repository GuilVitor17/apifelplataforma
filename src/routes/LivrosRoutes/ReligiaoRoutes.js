import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroReligiaoController.js'; 

const router = express.Router();



router.get('/religiao', LivroController.listarLivros)
router.get('/religiao/:id', LivroController.listarLivrosPorId)
router.post('/religiao', LivroController.cadastroLivro)
router.put('/religiao/:id', LivroController.atualizarLivro)
router.delete('/religiao/:id', LivroController.excluirLivro)

export default router;