import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import vendasRoutes from './routes/vendasRoutes.js';

dotenv.config();

const app = express();
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

app.use('/vendas', vendasRoutes);

export default app;
