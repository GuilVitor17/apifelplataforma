import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterReligiao/LivroReligiaoControllers1.js'

const router = express.Router();



router.get('/religiao1', LivroController.listarLivros)
router.get('/religiao1/:id', LivroController.listarLivrosPorId)
router.post('/religiao1', LivroController.cadastroLivro)
router.put('/religiao1/:id', LivroController.atualizarLivro)
router.delete('/religiao1/:id', LivroController.excluirLivro)

export default router;