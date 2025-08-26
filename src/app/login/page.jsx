import React from 'react';
import LoginHeader from '../components/auth/AuthHeader';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <LoginHeader />
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
            Bem-vindo(a) de volta!
          </h2>
          <LoginForm />
        </div>
      </main>
    </>
  );
}