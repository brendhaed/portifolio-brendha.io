import cv from "../data/cv.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-[#242424] text-black dark:text-white flex flex-col mt-20 items-center justify-center px-8 md:px-20 py-32"
    >
      {/* Partículas */}
      <div className="absolute inset-0 w-full h-full blur-[1px]">
        <ParticlesBackground />
      </div>

      {/* Glow de fundo */}
      <div className="absolute inset-0 -z-10 
       bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(76,29,149,0.25),black)]"
      />

      {/* Conteúdo */}
      <div className="max-w-xl text-center relative z-10">
        <h2 className="text-black dark:text-purple-400 text-4xl md:text-5xl font-bold mb-4">
          {cv.name}
        </h2>

        <h3 className="text-black dark:text-white text-lg font-semibold mb-3">{cv.title}</h3>
        <p className="text-black dark:text-gray-400 mb-8 text-sm leading-relaxed">
          {cv.summary}
        </p>

        {/* Botões */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href={cv.about.curriculoDownload}
            download
            className="text-black dark:text-white px-2 py-2 border border-black dark:border-white rounded-lg text-sm hover:bg-white hover:text-black transition md:px-5"
          >
            Currículo
          </a>

          <a
            href="#contato"
            className="px-4 py-2 bg-[#7f5af0] text-white rounded-lg text-sm hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition md:px-6"
          >
            Entrar em contato →
          </a>
        </div>

        {/* Redes */}
        <div className="flex justify-center gap-4 mt-8">
    
          <a
            href={cv.contact.github}
            className="bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-full 
              hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition"
          >
            <FaGithub className="text-black dark:text-white text-xl" />
          </a>

          <a
            href={cv.contact.linkedin}
            className="bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-full 
              hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition"
          >
            <FaLinkedin className="text-black dark:text-white text-xl" />
          </a>

          <a
            href={cv.contact.email}
            className="bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-full 
              hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition"
          >
            <FaEnvelope className="text-black dark:text-white text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
