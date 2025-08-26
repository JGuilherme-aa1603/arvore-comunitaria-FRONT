import Link from 'next/link';
import React from 'react';

function LoginHeader() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 px-8">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-2xl font-bold text-green-900 hover:text-green-700 transition-colors">
            Árvore Comunitária
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default LoginHeader;