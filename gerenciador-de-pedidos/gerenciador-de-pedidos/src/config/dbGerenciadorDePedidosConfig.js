const mongoose = require("mongoose");

async function connectDB() {
  try {
    const usuario = "gabriel" //|| "user";
    const senha = "senhaSegura123" //|| "password";
    const dbName = "gerenciador-pedidos" //|| "ordersdb";

    const uri = `mongodb://${usuario}:${senha}@localhost:27017/${dbName}?authSource=admin`;

    await mongoose.connect(uri);
    console.log("✅ MongoDB conectado com autenticação");
  } catch (err) {
    console.error("❌ Erro ao conectar MongoDB", err);
    process.exit(1);
  }
}

module.exports = connectDB;
