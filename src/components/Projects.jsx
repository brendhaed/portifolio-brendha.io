import cv from "../data/cv.json";
import { GoArrowUpRight } from "react-icons/go";
import { MdLayers } from "react-icons/md";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function Projects() {
  const techIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    Bootstrap: <FaBootstrap />,
    "Next.js": <SiNextdotjs />,
    Tailwind: <SiTailwindcss />,
    MaterialUI: <MdLayers />,
  };
  return (
    <section id="projetos" className="px-8 md:px-20 py-16 bg-[#242424]">
      <div className="w-full text-center mb-12">
        <h3 className="text-[#FFD67D] tracking-wide text-sm mb-2">Projetos</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Dê uma olha nos meus projetos
        </h1>
      </div>

      <div className="grid gap-10 md:grid-cols-3 justify-items-center">
        {/* Cards  */}
        {cv.projects.map((project, index) => (
          <div
            className="bg-[#1a1a1a] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105"
            key={index}
          >
            <div className="relative mb-4">
              <img
                src={project.image}
                alt={`Foto projeto ${index + 1}`}
                className="rounded w-full"
              />
              <a
                href={project.repository}
                target="_blank"
                className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition"
              >
                <FaGithub className="text-white" />
              </a>
            </div>
            <p className="text-white text-sm mb-1">{project.data}</p>
            <h2 className="text-white text-xl font-semibold mb-2">
              {project.name}
            </h2>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="text-center mb-4">
              <a
                href={project.link}
                target="_blank"
                className="text-purple-400 text-sm hover:underline transition"
              >
                Ver projeto no ar{" "}
                <GoArrowUpRight className="inline-block ml-1" />
              </a>
            </div>
            <div className="flex gap-3 justify-center text-purple-300 text-xl">
              {project.techs.map((tech, i) => (
                <span key={i}>{techIcons[tech] || tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
