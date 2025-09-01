import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-green-50 text-center p-8">
      <img
        src="/assets/muda.svg"
        alt="Ilustração de uma muda de árvore"
        className="h-32 w-32 mb-8"
      />

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4">
          Juntos, por um futuro mais verde.
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Registre suas ações sustentáveis e veja nossa árvore crescer em tempo
          real, simbolizando o esforço coletivo contra as mudanças climáticas.
        </p>

        <Link href="/login">
          <button className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors duration-300">
            Comece a Plantar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
