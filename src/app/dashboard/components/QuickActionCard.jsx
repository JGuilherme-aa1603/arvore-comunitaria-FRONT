"use client";
import React, { useState } from "react";
import apiClient from "@/lib/apiClient";

export default function QuickActionCard({ onCommitmentCreated }) {
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validação básica
    if (!titulo || titulo.trim().length < 2) {
      setError("O título deve ter pelo menos 2 caracteres.");
      setIsLoading(false);
      return;
    }
    if (!description || description.trim() === "") {
      setError("Por favor, descreva sua ação.");
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        titulo: titulo.trim(),
        descricao: description.trim(),
        categoria_id: Number(category),
      };
      
      const response = await apiClient.post("/api/commitment", payload);

      if (onCommitmentCreated) {
        onCommitmentCreated(response.data);
      }

  setTitulo("");
  setDescription("");
  setCategory("1");
    } catch (err) {
      let errorMessage = "Falha ao registrar a ação. Tente novamente.";
      
      if (err.response?.data?.error) {
        // Se for um array de erros do Zod
        if (Array.isArray(err.response.data.error)) {
          errorMessage = err.response.data.error
            .map(error => {
              if (error.path && error.path.length > 0) {
                return `${error.path.join('.')}: ${error.message}`;
              }
              return error.message || error;
            })
            .join(", ");
        } else if (typeof err.response.data.error === "string") {
          errorMessage = err.response.data.error;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 text-gray-800">
        O que você fez hoje pelo planeta?
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="titulo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Título da ação
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
            placeholder="Ex: Plantei uma árvore"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Categoria
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
          >
            <option value="1">Transporte</option>
            <option value="2">Alimentação</option>
            <option value="3">Energia</option>
            <option value="4">Reciclagem</option>
            <option value="5">Outro</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descrição
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
            placeholder="Ex: Fui de bicicleta para o trabalho"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:bg-green-400"
        >
          {isLoading ? "Registrando..." : "Registrar Ação"}
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
}
