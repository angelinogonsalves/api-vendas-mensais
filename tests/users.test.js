import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

describe('Testes da API de Usuários', () => {

  const incremento = Date.now();

  it('Deve retornar todos os usuários', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('Deve criar um novo usuário', async () => {
    const novoUsuario = {
      nome: 'João da Silva',
      email: `joaoSilva${incremento}@example.com`,
      senha: 'senha123'
    };

    const res = await request(app)
      .post('/users')
      .send(novoUsuario)
      .expect(201);

    expect(res.body).toHaveProperty('_id');
    expect(res.body.nome).toBe('João da Silva');
    expect(res.body.email).toBe(`joaoSilva${incremento}@example.com`);
  });

  it('Deve atualizar um usuário', async () => {
    const novoUsuario = {
      nome: 'Maria Souza',
      email: `mariaSouza${incremento}@example.com`,
      senha: 'senha456'
    };

    const usuarioCriado = await request(app)
      .post('/users')
      .send(novoUsuario);

    const usuarioAtualizado = {
      nome: 'Maria Souza Atualizada',
      email: `mariaSouza${incremento}@example.com`,
      senha: 'senha789'
    };

    const res = await request(app)
      .put(`/users/${usuarioCriado.body._id}`)
      .send(usuarioAtualizado)
      .expect(200);

    expect(res.body.nome).toBe('Maria Souza Atualizada');
  });

  it('Deve deletar um usuário', async () => {
    const novoUsuario = {
      nome: 'Carlos Oliveira',
      email: `carlosOliveira${incremento}@example.com`,
      senha: 'senha321'
    };

    const usuarioCriado = await request(app)
      .post('/users')
      .send(novoUsuario);

    const res = await request(app)
      .delete(`/users/${usuarioCriado.body._id}`)
      .expect(200);

    expect(res.body.message).toBe('Usuário excluído com sucesso!');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

});