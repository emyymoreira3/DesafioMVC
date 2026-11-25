import { Router } from 'express';
import {
    getJogos,
    getJogoPorId,
    getJogosPorFabricante,
    getJogosPorAno,
    postJogo,
    putJogo,
    deleteJogo
} from '../controllers/jogoController.js';

const router = Router();
// GET
router.get('/', getJogos);
router.get('/:id', getJogoPorId);
router.get('/fabricante/:fabricante', getJogosPorFabricante);
router.get('/ano/:ano', getJogosPorAno);

// POST
router.post('/', postJogo);

// PUT
router.put('/:id', putJogo);

// DELETE
router.delete('/:id', deleteJogo);

export default router;