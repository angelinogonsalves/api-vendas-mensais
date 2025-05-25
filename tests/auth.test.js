import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

let token = '';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // Garante que o usuário está limpo
  await request(app).post('/auth/register').send({
    nome: 'Usuário Teste',
    email: 'teste@jwt.com',
    senha: '123456'
  });

  // Faz login e salva o token
  const res = await request(app).post('/auth/login').send({
    email: 'teste@jwt.com',
    senha: '123456'
  });

  token = res.body.token;
});

describe('Rotas protegidas com JWT', () => {
  it('Deve acessar rota protegida com token', async () => {
    const res = await request(app)
      .get('/vendas')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('Não deve acessar rota protegida sem token', async () => {
    const res = await request(app)
      .get('/vendas')
      .expect(401);

    expect(res.body.message).toBe('Token ausente');
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
