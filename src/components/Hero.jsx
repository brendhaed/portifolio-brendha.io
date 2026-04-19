import cv from "../data/cv.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import curriculoDownload from "../assets/curriculo/curriculo-brendha-rodrigues.pdf";
import vetor from "../assets/img/icons/vetor-hero.png";

export function Hero() {
  return (
    <> 
      {/* Section inicio  */}
      <section
        id="inicio"
        className="bg-[#242424] flex flex-col mt-15 md:flex-col items-center justify-between px-8 md:px-20 py-30 gap-12"
      >
        <div className="max-w-xl text-center md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#9955E8]">
            {cv.name}
          </h2>
          <h3 className="text-white text-lg font-semibold mb-2">{cv.title}</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            {cv.summary}
          </p>

          {/* Botões de ação */}
          <div className="flex justify-center gap-4 mb-4">
            <a
              href={curriculoDownload}
              download
              className="text-white px-6 py-2 border border-white rounded-lg text-sm hover:bg-white hover:text-black transition"
            >
              Currículo
            </a>
            <a
              href="#contato"
              className="px-6 py-2 bg-[#7f5af0] text-white rounded-lg text-sm hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition"
            >
              Entrar em contato <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* network */}
          <div className="flex justify-center gap-4 mt-8 ">
            <a
              href={cv.contact.github}
              className="bg-[#333333] px-5 py-5 rounded-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)]"
            >
              <FaGithub className="text-white md:text-2xl" />
            </a>
            <a
              href={cv.contact.linkedin}
              className="bg-[#333333] px-5 py-5 rounded-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)]"
            >
              <FaLinkedin className="text-white md:text-2xl" />
            </a>
            <a
              href={cv.contact.email}
              className="bg-[#333333] px-5 py-5 rounded-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)]"
            >
              <FaEnvelope className="text-white md:text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
