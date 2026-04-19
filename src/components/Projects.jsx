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
  return (
    <section id="projetos" className="px-8 md:px-20 py-16 bg-[#242424]">
      <div className="w-full text-center mb-12">
        <h3 className="text-[#FFD67D] tracking-wide text-sm mb-2">Projetos</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Dê uma olha nos meus projetos
        </h1>
      </div>

      <div className="grid gap-10 md:grid-cols-3 justify-items-center">
        {/* Card 1  */}
        <div className="bg-[#030712] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
          <div className="relative mb-4">
            <img
              src={cv.projects[0].image}
              alt="Foto projeto 1"
              className="rounded w-full"
            />
            <a
              href={cv.projects[0].repository}
              target="_blank"
              className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
          <p className="text-white text-sm mb-1">{cv.projects[0].data}</p>
          <h2 className="text-white text-xl font-semibold mb-2">
            {cv.projects[0].name}
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            {cv.projects[0].description}
          </p>
          <div className="text-center mb-4">
            <a
              href={cv.projects[0].link}
              target="_blank"
              className="text-purple-400 text-sm hover:underline transition"
            >
              Ver projeto no ar <GoArrowUpRight className="inline-block ml-1" />
            </a>
          </div>
          <div className="flex gap-3 justify-center text-purple-300 text-xl">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <FaBootstrap />
          </div>
        </div>
        
        {/* Card 2  */}
        <div className="bg-[#030712] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
          <div className="relative mb-4">
            <img
              src={cv.projects[1].image}
              alt="Foto projeto 2"
              className="rounded w-full"
            />
            <a
              href={cv.projects[1].repository}
              target="_blank"
              className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
          <p className="text-white text-sm mb-1">
            {cv.projects[1].data}
          </p>
          <h2 className="text-white text-xl font-semibold mb-2">
            {cv.projects[1].name}
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            {cv.projects[1].description}
          </p>
          <div className="text-center mb-4">
            <a
              href={cv.projects[1].link}
              target="_blank"
              className="text-purple-400 text-sm hover:underline transition"
            >
              Ver projeto no ar <GoArrowUpRight className="inline-block ml-1" />
            </a>
          </div>
          <div className="flex gap-3 justify-center text-purple-300 text-xl">
            <SiNextdotjs />
            <SiTailwindcss />
          </div>
        </div>

        {/* Card 3  */}
        <div className="bg-[#030712] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
          <div className="relative mb-4">
            <img
              src={cv.projects[2].image}
              alt="Foto projeto 4"
              className="rounded w-full"
            />
            <a
              href={cv.projects[2].repository}
              target="_blank"
              className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
          <p className="text-white text-sm mb-1">
            {cv.projects[2].data}
          </p>
          <h2 className="text-white text-xl font-semibold mb-2">
            {cv.projects[2].name}
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            {cv.projects[2].description}
          </p>
          <div className="text-center mb-4">
            <a
              href={cv.projects[2].link}
              target="_blank"
              className="text-purple-400 text-sm hover:underline transition"
            >
              Ver projeto no ar <GoArrowUpRight className="inline-block ml-1" />
            </a>
          </div>
          <div className="flex gap-3 justify-center text-purple-300 text-xl">
            <SiNextdotjs />
            <MdLayers />
          </div>
        </div>
      </div>
    </section>
  );
}
