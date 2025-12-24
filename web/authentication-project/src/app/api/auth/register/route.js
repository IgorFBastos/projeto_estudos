// src/app/api/auth/register/route.js

import { registerUser } from '../../../services/RegisterUser';


export async function POST(req) {
  try {

    const body = await req.json();

    const { name, email, password, confirmPassword } = body;


    if (!name || !email || !password || !confirmPassword) {

      return new Response(JSON.stringify({ msg: 'Todos os campos são obrigatórios' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (password !== confirmPassword) {
      return new Response(JSON.stringify({ msg: 'Senhas não coincidem' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  

    const user = await registerUser(body);


    return new Response(JSON.stringify({ msg: 'Usuário registrado com sucesso!', user }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
      return new Response(JSON.stringify({ msg: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
