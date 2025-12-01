const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("../gerenciador-de-pedidos/gerenciador-de-pedidos/gerenciador-de-pedidos/src/routes/orderRoutes");

const app = express();
app.use(express.json());

// Configuração de conexão com autenticação
const user = "gabriel";
const password = "senhaSegura123";
const dbName = "gerenciador-pedidos";

const uri = `mongodb://${user}:${password}@localhost:27017/${dbName}?authSource=admin`;

mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB conectado com autenticação");
  })
  .catch((err) => {
    console.log("❌ Erro ao conectar MongoDB", err);
  });


// Rotas
app.use("/", orderRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

