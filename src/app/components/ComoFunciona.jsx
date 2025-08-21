import React from "react";

function ComoFunciona() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-2">
          Como Funciona?
        </h2>
        <p className="text-gray-600 mb-12">
          É simples, rápido e impactante. Siga os 3 passos abaixo.
        </p>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <img
                src="/assets/icons/users.svg"
                alt="Ícone de Cadastro"
                className="h-12 w-12"
              />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              1. Cadastre-se
            </h3>
            <p className="text-gray-600">
              Crie sua conta em segundos para começar a registrar seus
              compromissos com o planeta.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <img
                src="/assets/icons/plant-care.svg"
                alt="Ícone de Ação"
                className="h-12 w-12"
              />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              2. Registre sua Ação
            </h3>
            <p className="text-gray-600">
              Andou de bicicleta? Reciclou? Nos conte! Cada pequena ação faz a
              diferença.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <img
                src="/assets/icons/seedling.svg"
                alt="Ícone de Crescimento"
                className="h-12 w-12"
              />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              3. Veja a Árvore Crescer
            </h3>
            <p className="text-gray-600">
              Acompanhe o crescimento da árvore da comunidade, que floresce com
              cada contribuição.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
