import express from 'express';
import LivroController from '../../controllers/LivrosControllers/LivroAventuraControllers.js'; 

const router = express.Router();



router.get('/aventura', LivroController.listarlivros)
router.get('/aventura/:id', LivroController.listarlivrosPorId)
router.post('/aventura', LivroController.cadastroLivro)
router.put('/aventura/:id', LivroController.atualizarLivro)
router.delete('/aventura/:id', LivroController.excluirLivro)

export default router;