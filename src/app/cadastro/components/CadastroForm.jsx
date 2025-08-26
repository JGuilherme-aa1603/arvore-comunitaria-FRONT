"use client";

import React, { useState } from "react";
import Link from "next/link";

function CadastroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="w-full max-w-sm">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
          placeholder="Seu nome"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
          placeholder="seuemail@exemplo.com"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
          placeholder="••••••••"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 font-bold mb-2"
        >
          Confirmar Senha
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        Criar Conta
      </button>

      <p className="text-center text-gray-600 mt-6">
        Já tem uma conta?{" "}
        <Link
          href="/login"
          className="text-green-800 font-bold hover:underline"
        >
          Faça login
        </Link>
      </p>
    </form>
  );
}

export default CadastroForm;
