import { useState, useEffect } from "react";
import imgLogoDark from "../assets/img/icons/logo-nome-dark.png";
import imgLogoLight from "../assets/img/icons/logo-nome-light.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header({ theme, toggleTheme }) {
  //menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // header nav
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="backdrop-blur-md bg-gray-100/80 dark:bg-[#1a1a1a]/50 fixed top-0 w-full z-50 px-6 py-2">
        {/* mobile */}
        <div className="flex items-center justify-between md:hidden">
          {/* menu mobile */}
          <button
            className="text-black dark:text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* logo mobile */}
          <img src={theme === "dark" ? imgLogoDark : imgLogoLight}
          alt="Logo" className="h-16" />

          {/* theme mobile */}
          <button
            onClick={toggleTheme}
            className="text-black dark:text-white text-2xl cursor-pointer"
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>

        {/* desktop */}
        <div className="hidden md:flex items-center justify-between">
          <img src={theme === "dark" ? imgLogoDark : imgLogoLight}
          alt="Logo" className="h-16" />

          <nav className="flex space-x-6 text-sm text-black dark:text-white">
            <a
              href="#inicio"
              className={`hover:text-purple-400 ${activeSection === "inicio" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Home
            </a>
            <a
              href="#sobre"
              className={`hover:text-purple-400 ${activeSection === "sobre" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Sobre
            </a>
            <a
              href="#skills"
              className={`hover:text-purple-400 ${activeSection === "skills" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Skills
            </a>
            <a
              href="#educacao"
              className={`hover:text-purple-400 ${activeSection === "educacao" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Educação
            </a>
            <a
              href="#experiencias"
              className={`hover:text-purple-400 ${activeSection === "experiencias" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Experiências
            </a>
            <a
              href="#projetos"
              className={`hover:text-purple-400 ${activeSection === "projetos" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Projetos
            </a>
            <a
              href="#contato"
              className={`hover:text-purple-400 ${activeSection === "contato" ? "text-purple-700 dark:text-purple-400 font-semibold" : ""}`}
            >
              Contato
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            className="text-black dark:text-white text-2xl cursor-pointer"
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>

        {/* overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </header>

      {/* menu mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#7f5af0] dark:bg-[#1b1325] shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-purple-500">
          <h2 className="text-white text-lg font-bold">Menu</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>
        </div> 

        <nav className="flex flex-col space-y-4 p-6 text-white text-sm">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#educacao" onClick={() => setMenuOpen(false)}>
            Educação
          </a>
          <a href="#experiencias" onClick={() => setMenuOpen(false)}>
            Experiências
          </a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </nav>
      </div>
    </>
  );
}