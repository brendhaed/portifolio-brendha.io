import { useState } from "react";
import imgLogo from "../assets/img/icons/logo-nome.png";
import { MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md";

export function Header() {
  const [theme, setTheme] = useState("dark");
  const [lightColor, setlightColor] = useState("white");
  const [darkColor, setDarkColor] = useState("black");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setlightColor("black");
      setDarkColor("white");
    } else {
      setTheme("light");
      setlightColor("white");
      setDarkColor("black");
    }
  };
  
  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-center md:justify-between items-center px-8 py-2 bg-[#242424]">
        <div>
          <img src={imgLogo} alt="Logo" className="h-20 md:h-25" />
        </div>

        {/* Menu Desktop  */}
        <nav className="hidden md:flex space-x-6 text-sm text-white">
          <a href="#inicio" className="hover:text-purple-400">
            Home
          </a>
          <a href="#sobre" className="hover:text-purple-400">
            Sobre
          </a>
          <a href="#educacao" className="hover:text-purple-400">
            Educação
          </a>
          <a href="#experiencias" className="hover:text-purple-400">
            Experiências
          </a>
          <a href="#projetos" className="hover:text-purple-400">
            Projetos
          </a>
          <a href="#contato" className="hover:text-purple-400">
            Contato
          </a>
        </nav>

        {/* Theme */}
        <div>
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "light" ? (
              <MdOutlineDarkMode className="text-white text-2xl" />
            ) : (
              <MdOutlineLightMode className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Botão Menu Mobile  */}
        <button id="menu-toggle" className="text-white text-2xl md:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <div
        id="mobile-menu"
        className="fixed top-0 right-0 h-full w-64 bg-[#1b1325] shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-20 md:hidden"
      >
        <div className="flex justify-between items-center p-6 border-b border-purple-500">
          <h2 className="text-white text-lg font-bold">Menu</h2>
          <button id="menu-close" className="text-white text-2xl">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6 text-white text-sm">
          <a href="#inicio" className="hover:text-purple-400">
            Home
          </a>
          <a href="#sobre" className="hover:text-purple-400">
            Sobre
          </a>
          <a href="#educacao" className="hover:text-purple-400">
            Educação
          </a>
          <a href="#experiencias" className="hover:text-purple-400">
            Experiências
          </a>
          <a href="#projetos" className="hover:text-purple-400">
            Projetos
          </a>
          <a href="#contato" className="hover:text-purple-400">
            Contato
          </a>
        </nav>
      </div>
    </>
  );
}
