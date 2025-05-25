import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

let token = '';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const email = `testuser${Date.now()}@example.com`;

  await request(app).post('/auth/register').send({
    nome: 'Test User',
    email,
    senha: '123456'
  });

  const res = await request(app).post('/auth/login').send({
    email,
    senha: '123456'
  });

  token = res.body.token;
});

describe('Testes da API de Vendas', () => {

  it('Deve retornar todas as vendas', async () => {
    const res = await request(app)
      .get('/vendas')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('Deve criar uma nova venda mensal', async () => {
    const novaVenda = {
      ano: 2024,
      mes: '05',
      vendas: 1500
    };

    const res = await request(app)
      .post('/vendas')
      .set('Authorization', `Bearer ${token}`)
      .send(novaVenda)
      .expect(200);

    expect(res.body).toHaveProperty('_id');
    expect(res.body.ano).toBe(2024);
    expect(res.body.mes).toBe('05');
    expect(res.body.vendas).toBe(1500);
  });

  it('Deve atualizar uma venda mensal', async () => {
    const novaVenda = {
      ano: 2025,
      mes: '04',
      vendas: 1200
    };

    const vendaCriada = await request(app)
      .post('/vendas')
      .set('Authorization', `Bearer ${token}`)
      .send(novaVenda);

    const vendaAtualizada = {
      ano: 2025,
      mes: '04',
      vendas: 2000
    };

    const res = await request(app)
      .put(`/vendas/${vendaCriada.body._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(vendaAtualizada)
      .expect(200);

    expect(res.body.vendas).toBe(2000);
  });

  it('Deve deletar uma venda mensal', async () => {
    const novaVenda = {
      ano: 2026,
      mes: '06',
      vendas: 3000
    };

    const vendaCriada = await request(app)
      .post('/vendas')
      .set('Authorization', `Bearer ${token}`)
      .send(novaVenda);

    const res = await request(app)
      .delete(`/vendas/${vendaCriada.body._id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.message).toBe('Venda excluída com sucesso!');
  });  

  afterAll(async () => {
    await mongoose.connection.close();
  });

});