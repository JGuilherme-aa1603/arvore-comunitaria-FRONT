"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;

      const response = await axios.post(apiUrl, {
        email,
        senha: password,
      });

      const { token } = response.data;

      if (token) {
        // Salva o token no localStorage para uso posterior
        localStorage.setItem("authToken", token);
        router.push("/dashboard");
      } else {
        throw new Error("Token não recebido do servidor.");
      }
    } catch (err) {
      let errorMessage = "Falha no login. Verifique suas credenciais.";

      if (err.response?.data?.error) {
        // Se for um array de erros do Zod
        if (Array.isArray(err.response.data.error)) {
          errorMessage = err.response.data.error
            .map((error) => error.message || error)
            .join(", ");
        } else if (typeof err.response.data.error === "string") {
          errorMessage = err.response.data.error;
        }
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
          placeholder="seuemail@exemplo.com"
        />
      </div>
      <div className="mb-6">
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
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
          placeholder="••••••••"
        />
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-green-800 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:bg-green-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Entrando..." : "Entrar"}
      </button>

      {error && (
        <p className="text-center text-red-500 font-semibold mt-4">{error}</p>
      )}

      <p className="text-center text-gray-600 mt-6">
        Não tem uma conta?{" "}
        <Link
          href="/cadastro"
          className="text-green-800 font-bold hover:underline"
        >
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
