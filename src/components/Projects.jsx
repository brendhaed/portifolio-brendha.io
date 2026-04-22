import cv from "../data/cv.json";
import { useState } from "react";
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
import { Modal } from "./ModalProject";

// icones das tecnologias usadas nos projetos
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
  // modal useState
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projetos" className="px-8 md:px-20 py-16 bg-white dark:bg-[#242424]">
      <div className="w-full text-center mb-12">
        <h3 className="text-[#f7b831] dark:text-[#FFD67D] tracking-wide text-sm mb-2">Projetos</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Dê uma olha nos meus projetos
        </h1>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Cards  */}
        {cv.projects.map((project, index) => (
          <div
            className="bg-gray-100 dark:bg-[#1a1a1a] cursor-pointer rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105"
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
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2 right-2 bg-[#8978bdc2] dark:bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition"
              >
                <FaGithub className="text-white" />
              </a>
            </div>
            <p className="text-black dark:text-gray-300 text-sm mb-1">{project.data}</p>
            <h2 className="text-black dark:text-white text-xl font-semibold mb-2">
              {project.name}
            </h2>
            
            <p className="text-sm text-black dark:text-gray-400 mb-4 ">
              {project.description}...
              <button
                onClick={() => setSelectedProject(project)}
                className="text-purple-700 dark:text-purple-400 ml-1 cursor-pointer hover:underline"
              >
                ver mais
              </button>
            </p>
            <div className="text-center mb-4">
              <a
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-purple-700 dark:text-purple-400 text-sm hover:underline transition"
              >
                Ver projeto no ar{" "}
                <GoArrowUpRight className="inline-block ml-1" />
              </a>
            </div>
            <div className="flex gap-3 justify-center text-purple-700 dark:text-purple-300 text-xl">
              {project.techs.map((tech, i) => (
                <span key={i}>{techIcons[tech] || tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <>
            <p className="text-xs text-purple-700 dark:text-purple-400 mb-1">Detalhes</p>
            <img src={selectedProject.image} className="rounded mb-4" />

            <h2 className="text-black dark:text-white text-2xl font-bold mb-2">{selectedProject.name}</h2>

            <p className="text-black dark:text-gray-400 mb-4">
              {selectedProject.descriptionModal}
            </p>

            {/* Techs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.techs.map((tech, i) => (
                <span
                  key={i}
                  className="text-black dark:text-white bg-purple-500/20 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                className="text-purple-700 dark:text-purple-400 hover:underline"
              >
                Ver projeto <GoArrowUpRight className="inline ml-1" />
              </a>

              <a
                href={selectedProject.repository}
                target="_blank"
                className="text-black dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400"
              >
                <FaGithub />
              </a>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}