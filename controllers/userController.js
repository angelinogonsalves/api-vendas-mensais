import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verifica duplicidade (opcional, mas seguro)
    const existente = await User.findOne({ email });
    if (existente) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    // Criptografa a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = await User.create({
      nome,
      email,
      senha: senhaCriptografada
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find({}, '-senha');
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const atualizarUsuario = async (req, res) => {
  try {
    const usuarioAtualizado = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
        context: 'query'
      }
    );
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deletarUsuario = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
