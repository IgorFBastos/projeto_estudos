import Link from 'next/link';


// login/Form.js
export default function LoginForm() {





    return (
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Entrar
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{" "}
            <Link href="/pages/register" className="text-indigo-600 hover:underline">
              Registre-se
            </Link>
          </p>
        </div>
      </form>
    );
  }
  