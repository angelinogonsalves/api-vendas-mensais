/**
 * @file controllers/vendasController.js
 * @description Controlador para gerenciar as operações relacionadas às vendas mensais.
 * Inclui funções para criar, listar, atualizar e deletar vendas mensais.
 * @requires mongoose
 * @requires ../models/VendasMensal.js
 * @exports criarVenda
 * @exports listarVendas
 *  
 * @exports atualizarVenda
 * @exports deletarVenda 
 * @version 1.0.0
 * @author AngelinoGonsalves
 * @date 2023-10-01
 */
import VendasMensal from '../models/VendasMensal.js';

// controller para criar uma nova venda mensal
export const criarVenda = async (req, res) => {
  try {
    const novaVenda = await VendasMensal.create(req.body);
    res.json(novaVenda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controller para listar todas as vendas mensais
export const listarVendas = async (req, res) => {
  try {
    const vendas = await VendasMensal.find();
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controller para atualizar uma venda mensal
export const atualizarVenda = async (req, res) => {
  try {
    const vendaAtualizada = await VendasMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(vendaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controller para deletar uma venda mensal
export const deletarVenda = async (req, res) => {
  try {
    await VendasMensal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Venda excluída com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
