# 📊 API de Vendas Mensais

API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB (Mongoose)**, estruturada no padrão **MVC**, com **JWT para autenticação**, e **testes automatizados** usando **Jest** e **Supertest**.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com)
- [Jest](https://jestjs.io)
- [Supertest](https://github.com/visionmedia/supertest)
- [Dotenv](https://github.com/motdotla/dotenv)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

## 📁 Estrutura

```
/
├── config/             # Configurações (ex: banco de dados)
├── controllers/        # Lógica das rotas
├── middleware/         # Middlewares (ex: autenticação JWT)
├── models/             # Modelos do Mongoose
├── routes/             # Arquivos de rotas por domínio
├── scripts/            # Scripts auxiliares (ex: seed de usuários)
├── tests/              # Testes automatizados
├── app.js              # Configuração principal do app
├── server.js           # Inicialização do servidor
├── .env                # Variáveis de ambiente (não commitado)
```

---

## 🔄 Rotas principais

### 🛡️ Autenticação
| Método | Rota         | Descrição                      |
|--------|--------------|---------------------------------|
| POST   | `/auth/register` | Registra um novo usuário       |
| POST   | `/auth/login`    | Realiza login e retorna token |

### 👤 Usuários
| Método | Rota           | Descrição                     |
|--------|----------------|-------------------------------|
| GET    | `/users`       | Lista todos os usuários       |
| PUT    | `/users/:id`   | Atualiza um usuário           |
| DELETE | `/users/:id`   | Remove um usuário             |

### 📊 Vendas (protegidas com JWT)
| Método | Rota            | Descrição                 |
|--------|------------------|---------------------------|
| GET    | `/vendas`        | Lista todas as vendas     |
| POST   | `/vendas`        | Cria uma nova venda       |
| PUT    | `/vendas/:id`    | Atualiza uma venda        |
| DELETE | `/vendas/:id`    | Deleta uma venda          |

---

## 🧪 Testes Automatizados

O projeto possui testes automatizados para autenticação, usuários e vendas, utilizando `Jest` e `Supertest`.

### 📌 Rodando os testes:

```bash
npm install
npm test
```

> Os testes utilizam autenticação JWT e conexão com MongoDB real. Recomenda-se usar um banco separado para testes ou MongoDB in-memory.

---

## ▶️ Como rodar localmente

1. Clone o projeto:
   ```bash
   git clone https://github.com/angelinogonsalves/api-vendas-mensais.git
   cd api-vendas-mensais
   ```

2. Crie um arquivo `.env` na raiz com:
   ```
   MONGO_URI=mongodb://localhost:27017/api-vendas
   JWT_SECRET=sua_chave_jwt
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Rode o servidor:
   ```bash
   node server.js
   ```
   Ou se estiver usando `nodemon`:
   ```bash
   npm run dev
   ```

---

## 🧠 Autor

Desenvolvido por [Angelino Gonsalves](https://github.com/angelinogonsalves)  
Contato: angelino.gonsalves@gmail.com
