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
        className="bg-white dark:bg-[#242424] rounded-2xl mx-5 md:mx-20 my-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
        >
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Glow foto */}
            <div className="absolute inset-0 rounded-full bg-purple-400 blur-2xl opacity-40"></div>
            <img
            src={cv.about.imageProfile}
            alt="Foto perfil"
            className="
            relative
            w-36 h-36
            sm:w-44 sm:h-44
            md:w-52 md:h-52
            lg:w-60 lg:h-60
            rounded-full
            object-cover
            border-2
            dark:border-white/10
            border-purple-600
            shadow-lg
            transition-transform duration-300
            hover:scale-105"
          />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {/* Tecnologias  */}
          <div className="flex gap-3 items-center justify-center text-purple-600 dark:text-purple-400 text-xl mb-4 md:justify-start">
            <FaHtml5 />
            <FaCss3Alt />
            <FaBootstrap />
            <SiTailwindcss />
            <FaJs/>
            <FaReact />
            <SiNextdotjs />
            <FaGitAlt />
            <i className="fa-brands fa-python"></i>
          </div>

          <h3 className="text-[#d97706] dark:text-[#FFD67D] text-base mb-2 text-center md:text-left">
            Sobre mim
          </h3>
          <h2 className="text-black dark:text-white text-base mb-6 md:text-xl font-semibold">
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