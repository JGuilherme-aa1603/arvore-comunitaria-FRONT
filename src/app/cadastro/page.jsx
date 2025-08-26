import React from 'react';
import AuthHeader from '../components/auth/AuthHeader';
import CadastroForm from './components/CadastroForm';

export default function CadastroPage() {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 py-24">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
            Crie sua Conta
          </h2>
          <CadastroForm />
        </div>
      </main>
    </>
  );
}