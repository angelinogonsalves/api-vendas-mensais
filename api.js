import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import vendasRoutes from './routes/vendasRoutes.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Conexão com banco
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

connectDB();

// 🔗 Usa as rotas separadas
app.use('/vendas', vendasRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
