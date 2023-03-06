import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterReligiao/LivroReligiaoControllers5.js'

const router = express.Router();



router.get('/religiao5', LivroController.listarLivros)
router.get('/religiao5/:id', LivroController.listarLivrosPorId)
router.post('/religiao5', LivroController.cadastroLivro)
router.put('/religiao5/:id', LivroController.atualizarLivro)
router.delete('/religiao5/:id', LivroController.excluirLivro)

export default router;