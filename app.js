const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("../gerenciador-de-pedidos/gerenciador-de-pedidos/gerenciador-de-pedidos/src/routes/orderRoutes");
const connectDB = require("./gerenciador-de-pedidos/gerenciador-de-pedidos/src/config/dbGerenciadorDePedidosConfig")
const swaggerUi= require('swagger-ui-express');
const swaggerFile = require('./gerenciador-de-pedidos/gerenciador-de-pedidos/src/config/swagger-output.json');

const app = express();
app.use(express.json());


// Conexão com banco
connectDB();
// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Rotas
app.use("/", orderRoutes);

app.listen(3000, () => {
  console.log("🚀Servidor rodando em http://localhost:3000");
  console.log("📖 Swagger disponível em http://localhost:3000/api-docs")
});

