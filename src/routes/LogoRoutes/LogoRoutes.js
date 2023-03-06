import express from 'express';
import LogoController from '../../controllers/LogoMarcas/LogomarcasControllers.js'; 

const router = express.Router();



router.get('/logomarcas', LogoController.listarlogos)
router.get('/logomarcas/:id', LogoController.listarlogosPorId)
router.post('/logomarcas', LogoController.cadastrologos)
router.put('/logomarcas/:id', LogoController.atualizarlogos)
router.delete('/logomarcas/:id', LogoController.excluirlogos)

export default router;