import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const usuarios = [
  { nome: 'Alice Santos', email: 'alice@example.com', senha: 'senha123' },
  { nome: 'Bruno Lima', email: 'bruno@example.com', senha: 'senha456' },
  { nome: 'Carla Souza', email: 'carla@example.com', senha: 'senha789' }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany({});
    await User.insertMany(usuarios);
    console.log('Usuários inseridos com sucesso!');
    process.exit();
  } catch (err) {
    console.error('Erro ao inserir usuários:', err);
    process.exit(1);
  }
}

seed();