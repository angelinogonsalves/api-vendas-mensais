import express from 'express';
import dotenv from 'dotenv';

// Configurações
import { connectDB } from './config/db.js';

// Middlewares
import verificarToken from './middleware/authMiddleware.js';

// Rotas
import authRoutes from './routes/authRoutes.js';
import vendasRoutes from './routes/vendasRoutes.js';
import usersRoutes from './routes/usersRoutes.js';


dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/vendas', verificarToken, vendasRoutes);
app.use('/users', usersRoutes);

export default app;
