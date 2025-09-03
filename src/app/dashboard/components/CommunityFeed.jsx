import React from "react";

export default function CommunityFeed({ commitments, currentUser }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-full">
      <h3 className="font-bold text-xl mb-4 text-gray-800">
        Atividade da Comunidade
      </h3>
      {commitments.length > 0 ? (
        <ul className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {commitments.slice(0, 10).map((item) => {
            const userName = item.usuarios?.nome || "Usuário Anônimo";
            const categoryName = item.categorias?.nome || "";
            return (
              <li
                key={item.id}
                className="text-sm text-gray-700 border-b pb-2 flex flex-col gap-1"
                style={{ wordBreak: "break-word" }}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <strong
                    className="text-green-900 truncate max-w-[120px]"
                    title={userName}
                  >
                    {userName}
                  </strong>
                  <span className="text-xs text-gray-500">
                    registrou em{" "}
                    <em className="text-green-700">{categoryName}</em>:
                  </span>
                </div>
                <div
                  className="text-gray-800 break-words whitespace-pre-line max-w-full overflow-hidden text-ellipsis"
                  style={{ display: "block" }}
                >
                  {item.promessa || item.nome}
                </div>
                <span className="text-xs text-gray-400 block">
                  {new Date(item.data_criacao).toLocaleDateString("pt-BR")}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500">
          Nenhuma atividade registrada ainda. Seja o primeiro!
        </p>
      )}
    </div>
  );
}
