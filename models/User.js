// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    nome: String,
    email: { type: String, unique: true },
    senha: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);
