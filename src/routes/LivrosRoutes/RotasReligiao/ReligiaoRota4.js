import express from 'express';
import LivroController from '../../../controllers/LivrosControllers/RouterReligiao/LivroReligiaoControllers4.js'

const router = express.Router();



router.get('/religiao4', LivroController.listarLivros)
router.get('/religiao4/:id', LivroController.listarLivrosPorId)
router.post('/religiao4', LivroController.cadastroLivro)
router.put('/religiao4/:id', LivroController.atualizarLivro)
router.delete('/religiao4/:id', LivroController.excluirLivro)

export default router;