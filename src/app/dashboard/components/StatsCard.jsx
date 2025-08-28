import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
        {title}
      </p>
      <p className="text-3xl font-bold text-green-800">{value}</p>
    </div>
  );
}
