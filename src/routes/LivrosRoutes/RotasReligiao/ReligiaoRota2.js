import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterReligiao/LivroReligiaoControllers2.js'

const router = express.Router();



router.get('/religiao2', LivroController.listarLivros)
router.get('/religiao2/:id', LivroController.listarLivrosPorId)
router.post('/religiao2', LivroController.cadastroLivro)
router.put('/religiao2/:id', LivroController.atualizarLivro)
router.delete('/religiao2/:id', LivroController.excluirLivro)

export default router;