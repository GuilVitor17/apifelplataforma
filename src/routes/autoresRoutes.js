import express from 'express';
import AutorController from '../controllers/userController.js';

const router = express.Router();

router.get('/autores', AutorController.listarautor)
router.get('/autores/:id', AutorController.listarautorPorId)
router.post('/autores', AutorController.cadastroAutor)
router.put('/autores/:id', AutorController.atualizarAutor)
router.delete('/autores/:id', AutorController.excluirAutor)

export default router;