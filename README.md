# API de Vendas Mensais

Esta é uma API RESTful desenvolvida com Node.js, Express e MongoDB (Mongoose), seguindo padrão MVC.

## Tecnologias
- Node.js
- Express
- Mongoose
- MongoDB Atlas

## Rotas principais
- `GET /vendas` – lista todas as vendas
- `POST /vendas` – cria uma nova venda
- `PUT /vendas/:id` – atualiza uma venda
- `DELETE /vendas/:id` – deleta uma venda

## Como rodar localmente
1. Clone o projeto
2. Crie um arquivo `.env` com `MONGO_URI=...`
3. Execute `npm install`
4. Rode com `node api.js` ou `npm run dev` (se usar nodemon)

