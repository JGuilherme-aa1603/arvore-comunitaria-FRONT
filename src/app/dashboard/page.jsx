"use client";
import React, { useState, useEffect } from "react";
import apiClient from "@/lib/apiClient";

import UserAvatar from "./components/UserAvatar";
import StatsCard from "./components/StatsCard";
import QuickActionCard from "./components/QuickActionCard";
import CommunityFeed from "./components/CommunityFeed";

export default function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [commitments, setCommitments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verifica se há token no localStorage
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError(
            "Token de autenticação não encontrado. Faça o login novamente."
          );
          return;
        }

        const [userResponse, commitmentsResponse] = await Promise.all([
          apiClient.get("/api/auth/me"),
          apiClient.get("/api/commitment"),
        ]);

        setUserData(userResponse.data);
        setCommitments(commitmentsResponse.data);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        if (err.response?.status === 401) {
          localStorage.removeItem("authToken");
          setError("Sessão expirada. Faça o login novamente.");
        } else {
          setError(
            "Não foi possível carregar os dados do dashboard. Tente fazer o login novamente."
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewCommitment = (newCommitment) => {
    setCommitments((prevCommitments) => [newCommitment, ...prevCommitments]);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Carregando dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <UserAvatar initials={userData?.nome?.charAt(0) || "U"} />
            <h1 className="text-3xl sm:text-4xl font-bold text-green-900">
              Bem-vindo(a) de volta, {userData?.nome || "Usuário"}!
            </h1>
          </div>
          <a
            href="/tree"
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors duration-200"
          >
            Ir para Árvore
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <QuickActionCard onCommitmentCreated={handleNewCommitment} />
          </div>

          <div className="space-y-8">
            <StatsCard title="Ações da Comunidade" value={commitments.length} />
            <CommunityFeed commitments={commitments} currentUser={userData} />
          </div>
        </div>
      </div>
    </div>
  );
}
