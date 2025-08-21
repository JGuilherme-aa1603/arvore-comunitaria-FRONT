import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-100 text-center p-6">
      <p>&copy; {currentYear} Árvore. Todos os direitos reservados.</p>
      <p className="text-sm mt-1">Um projeto feito por Equipe Cão</p>
    </footer>
  );
}

export default Footer;
