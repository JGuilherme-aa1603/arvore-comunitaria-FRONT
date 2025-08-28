import React from "react";

export default function UserAvatar({ initials }) {
  return (
    <div className="flex items-center justify-center h-12 w-12 bg-green-700 rounded-full text-white font-bold text-xl">
      {initials}
    </div>
  );
}
