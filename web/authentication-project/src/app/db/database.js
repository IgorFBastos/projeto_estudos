// src/database/db.js
import mongoose from "mongoose";

// acessa a rota que esta no .env
const URL = process.env.DATABASE_URL;

// função para conectar ao MongoDB
const connectDB = async () => {
  if (!URL) {
    throw new Error("URL do banco de dados não encontrada");
  }
  return await mongoose.connect(URL);
}

// função para se desconectar ao MongoDB
const disconnectDB = async() => {
  return await mongoose.disconnect();
}

const database = {connectDB, disconnectDB};

export default database;
