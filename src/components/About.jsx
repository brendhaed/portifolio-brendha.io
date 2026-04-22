import cv from "../data/cv.json";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function About() {
  return (
    <>
      <section
        id="sobre"
        className="bg-white dark:bg-[#242424] rounded-2xl mx-6 md:mx-20 my-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-white"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Glow foto */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] blur-xl opacity-20"></div>
            <img
              src={cv.about.imageProfile}
              alt="Foto perfil"
              className="
              relative
              w-[250px] h-[250px] md:w-44 md:h-44
              rounded-full
              object-cover
              border-4 dark:border-white/10
              border-purple-500
              shadow-lg
              transition-transform duration-300
              hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {/* Tecnologias  */}
          <div className="flex gap-3 text-purple-600 dark:text-purple-400 text-xl mb-4 ">
            <FaHtml5 />
            <FaCss3Alt />
            <FaBootstrap />
            <SiTailwindcss />
            <FaJs />
            <FaReact />
            <SiNextdotjs />
            <FaGitAlt />
            <i className="fa-brands fa-python"></i>
          </div>

          <h3 className="text-[#f7b831] dark:text-[#FFD67D] text-sm mb-2 text-center md:text-left">
            Sobre mim
          </h3>
          <h2 className="text-black dark:text-white text-xl md:text-2xl font-bold mb-4">
            {cv.about.title}
          </h2>

          <p className="text-sm text-black dark:text-gray-300 leading-relaxed mb-6">
            {cv.about.description}
          </p>

          <div className="flex justify-center"> 
            <a
              href={cv.about.curriculoDownload}
              download
              className="inline-block bg-[#7f5af0] px-5 py-2 rounded-lg text-sm hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition"
            >
              Meu currículo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
