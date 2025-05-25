import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'chaveultrasecreta';

export const register = async (req, res) => {
  const { nome, email, senha } = req.body;

  const userExistente = await User.findOne({ email });
  if (userExistente) return res.status(400).json({ message: 'Usuário já existe' });

  const hash = await bcrypt.hash(senha, 10);
  await User.create({ nome, email, senha: hash });

  res.status(201).json({ message: 'Usuário criado com sucesso' });
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

  const senhaOk = await bcrypt.compare(senha, user.senha);
  if (!senhaOk) return res.status(401).json({ message: 'Senha incorreta' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};
