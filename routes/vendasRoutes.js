import express from 'express';
import {
  criarVenda,
  listarVendas,
  atualizarVenda,
  deletarVenda
} from '../controllers/vendaController.js';

const router = express.Router();

router.post('/', criarVenda);
router.get('/', listarVendas);
router.put('/:id', atualizarVenda);
router.delete('/:id', deletarVenda);

export default router;
