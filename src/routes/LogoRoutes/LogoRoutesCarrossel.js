import express from 'express';
import LogoController from '../../controllers/LogoMarcas/LogoCarrosselController.js'; 

const router = express.Router();



router.get('/logomarcascarrossel', LogoController.listarlogos)
router.get('/logomarcascarrossel/:id', LogoController.listarlogosPorId)
router.post('/logomarcascarrossel', LogoController.cadastrologos)
router.put('/logomarcascarrossel/:id', LogoController.atualizarlogos)
router.delete('/logomarcascarrossel/:id', LogoController.excluirlogos)

export default router;