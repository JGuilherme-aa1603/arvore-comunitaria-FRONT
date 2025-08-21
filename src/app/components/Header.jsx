"use client";
import React, { useState, useEffect } from "react";
import MenuIcon from "../../components/icons/MenuIcon.jsx";
import CloseIcon from "../../components/icons/CloseIcon.jsx";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = isScrolled ? "text-white" : "text-green-900";
  const buttonTextColor = isScrolled
    ? "text-white hover:text-yellow-300"
    : "text-green-800 hover:text-green-600";
  const iconColor = isScrolled ? "text-white" : "text-green-900";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${textColor} ${
            isScrolled ? "[text-shadow:1px_1px_2px_rgba(0,0,0,0.2)]" : ""
          }`}
        >
          Árvore Comunitária
        </h1>
        <nav className="hidden md:flex items-center space-x-4">
          <button
            className={`font-semibold transition-colors duration-300 ${buttonTextColor}`}
          >
            Login
          </button>
          <button className="bg-yellow-400 text-green-900 font-bold py-2 px-5 rounded-full hover:bg-yellow-300 transition-colors duration-200">
            Cadastre-se
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <MenuIcon className={iconColor} />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-green-800 text-center">
          <button className="block w-full py-3 text-white font-semibold hover:bg-green-700 transition-colors duration-200">
            Login
          </button>
          <button className="block w-full py-4 bg-yellow-400 text-green-900 font-bold hover:bg-yellow-300 transition-colors duration-200">
            Cadastre-se
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
