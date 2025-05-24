/**
 * @file controllers/vendasController.js
 * @description Controlador para gerenciar as operações relacionadas às vendas mensais.
 * Inclui funções para criar, listar, atualizar e deletar vendas mensais.
 * @requires mongoose
 * @requires ../models/VendasMensal
 * 
 * @exports criarVenda
 * @exports listarVendas
 * @exports atualizarVenda
 * @exports deletarVenda
 * 
 * @version 1.0.0
 * @author AngelinoGonsalves
 * @date 2023-10-01
 */

import express from 'express';
import {
  criarVenda,
  listarVendas,
  atualizarVenda,
  deletarVenda
} from '../controllers/vendasController.js';

const router = express.Router();

router.post('/', criarVenda);
router.get('/', listarVendas);
router.put('/:id', atualizarVenda);
router.delete('/:id', deletarVenda);

export default router;
