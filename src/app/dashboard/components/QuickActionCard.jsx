"use client";
import React, { useState } from "react";

export default function QuickActionCard() {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ação registrada: ${description}`);
    setDescription("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 text-gray-800">
        O que você fez hoje pelo planeta?
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Categoria
          </label>
          <select
            id="category"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
          >
            <option>Transporte</option>
            <option>Alimentação</option>
            <option>Energia</option>
            <option>Reciclagem</option>
            <option>Outro</option>
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
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder:text-gray-400"
            placeholder="Ex: Fui de bicicleta para o trabalho"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Registrar Ação
        </button>
      </form>
    </div>
  );
}
