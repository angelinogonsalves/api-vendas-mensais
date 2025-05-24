import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import VendasMensal from './models/VendasMensal.js';

dotenv.config();

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado com sucesso!');    
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

connectDB();

// Rota para criar uma nova venda mensal
app.post('/vendas', async (req, res) => {
  try {
    const novaVendaMensal = await VendasMensal.create(req.body);
    res.json(novaVendaMensal);
  } catch (error) {
    res.json({ error: error });
  }
});

// Rota para obter todas as vendas mensais
app.get('/vendas', async (req, res) => {
  try {
    const vendasMensais = await VendasMensal.find();
    res.json(vendasMensais);
  } catch (error) {
    res.json({ error: error });
  }
});

// Rota para atualizar uma venda mensal
app.put('/vendas/:id', async (req, res) => {
  try {
    const vendaMensalAtualizada = await VendasMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(vendaMensalAtualizada);
  } catch (error) {
    res.json({ error: error });
  }
});

// Rota para excluir uma venda mensal
app.delete('/vendas/:id', async (req, res) => {
  try {
    await VendasMensal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Venda mensal excluída com sucesso!' });
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta: ${PORT}`) );
