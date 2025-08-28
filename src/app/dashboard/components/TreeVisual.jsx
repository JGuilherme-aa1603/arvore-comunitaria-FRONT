import React from "react";

export default function TreeVisual({ level, stage }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-green-900">{stage}</h2>
      <p className="text-gray-600 mb-4">
        Crescimento da Comunidade: {Math.round(level * 100)}%
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-gradient-to-r from-yellow-400 to-green-500 h-4 rounded-full"
          style={{ width: `${level * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
