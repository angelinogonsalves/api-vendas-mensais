# 📊 API de Vendas Mensais

API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB (Mongoose)**, estruturada no padrão **MVC** e com **testes automatizados** usando **Jest** e **Supertest**.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com)
- [Jest](https://jestjs.io)
- [Supertest](https://github.com/visionmedia/supertest)
- [Dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Estrutura

```
/
├── controllers/        # Lógica das rotas
├── models/             # Modelos do Mongoose
├── routes/             # Rotas separadas
├── vendas/test.js      # Testes automatizados
├── app.js              # Configuração principal do app
├── server.js           # Inicialização do servidor
├── .env                # Variáveis de ambiente (não commitado)
```

---

## 🔄 Rotas principais

| Método | Rota            | Descrição                 |
|--------|------------------|---------------------------|
| GET    | `/vendas`        | Lista todas as vendas     |
| POST   | `/vendas`        | Cria uma nova venda       |
| PUT    | `/vendas/:id`    | Atualiza uma venda        |
| DELETE | `/vendas/:id`    | Deleta uma venda          |

---

## 🧪 Testes Automatizados

O projeto possui testes automatizados para as principais rotas da API utilizando `Jest` e `Supertest`.

### 📌 Rodando os testes:

```bash
npm install
npm test
```

> Os testes utilizam a conexão com o MongoDB. Por padrão, salvam dados reais, então use um banco separado para testes ou adapte para uso com MongoDB in-memory.

---

## ▶️ Como rodar localmente

1. Clone o projeto:
   ```bash
   git clone https://github.com/angelinogonsalves/api-vendas-mensais.git
   cd api-vendas-mensais
   ```

2. Crie um arquivo `.env` na raiz com:
   ```
   MONGO_URI=mongodb://localhost:27017/nome-do-seu-banco
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

---

## ✅ Contribuições

Sinta-se à vontade para abrir issues ou pull requests.  
Vamos melhorar juntos! 💪
