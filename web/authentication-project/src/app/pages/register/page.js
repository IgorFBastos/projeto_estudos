
import RegisterForm from './RegisterForm';


export default function RegisterPage() {

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>
            <RegisterForm />
          </div>
        </main>
      );
}