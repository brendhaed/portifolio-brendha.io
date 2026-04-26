import { useState, useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experiences } from "./components/Experiences";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  // Modo escuro e claro
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    // salva no navegador
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // AOS - Animate On Scroll
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação
      once: true, // anima só uma vez
    });
  }, []);

  return (
    <>
      <div className="min-h-screen text-black dark:text-white">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
