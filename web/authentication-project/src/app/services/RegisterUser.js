// src/services/userService.js
import User from '../db/schema/User';
import database from '../db/database';
import bcrypt from "bcryptjs";


export async function registerUser(data) {

  // conecta ao banco de dados
  await database.connectDB();

  // desestrutura o objeto data passado como argumento
  const { name, email, password } = data;

  // verifica se um usuário já existe com o mesmo email
  const userExist = await User.findOne({ email: email });

  if (userExist) {
    throw new Error('Email já cadastrado');
  }

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  // cria um novo usuário com os dados fornecidos
  const newUser = new User({ 
    name, 
    email, 
    password: hashPassword 
  });

  // salva o novo usuário no banco de dados
  await newUser.save();

  // desconecta do banco de dados
  await database.disconnectDB();

  // retorna o novo usuário
  return newUser;

}
