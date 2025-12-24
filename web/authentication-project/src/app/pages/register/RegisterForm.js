"use client";

import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// app/register/Form.js
export default function RegisterForm() {

  // States 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();


  // function para lidar com as mudanças dos inputs
  const handleChange = (e) => {

    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos os campos devem ser preenchidos');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não conferem');
      return;
    }


    // chamada para o endpoint de registro
    axios.post('/api/auth/register', formData)
      .then(response => {

        console.log(response)
        setSuccess('Registro efetuado com sucesso');

        // Implementar ida para tela de login ou para tela inical após registrar-se

        // Limpar os inputs
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });

        setError(null);

        router.push('/pages/login')

      
      })
      .catch(error => {
        setError('Ocorreu um erro ao realizar o registro');
      });

  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Senha</label>
        <input
          type="password"
          name="password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500"
          value={formData.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500"
          placeholder="Confirme sua senha"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"

      >
        Registrar
      </button>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Já possui uma conta?{" "}
          <Link href="/pages/login" className="text-indigo-600 hover:underline">
            Faça login
          </Link>
        </p>
      </div>


      {error && <p className="text-center text-red-500 text-sm">{error}</p>}
      {success && <p className="text-center text-green-500 text-sm">{success}</p>}

    </form>
  );
}
