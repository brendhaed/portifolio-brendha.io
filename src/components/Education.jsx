import cv from "../data/cv.json";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export function Education() {
  return (
    <section
      id="educacao"
      className="bg-white dark:bg-[#242424] rounded-2xl mx-6 md:mx-20 my-10 p-8 md:p-12 text-black dark:text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-[#d97706] dark:text-[#FFD67D] text-base mb-2 ">
          Formação
        </h2>
        <h1 className="text-base md:text-2xl font-bold text-black dark:text-white">
          Formação acadêmica
        </h1>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {cv.education.map((edu, index) => (
          <div
            key={index} 
            className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl border border-transparent 
            hover:border-purple-500/40 transition duration-300 
            hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            {/* Curso */}
            <h3 className="text-black dark:text-white text-lg font-semibold mb-2">
              {edu.course}
            </h3>

            {/* Instituição */}
            <p className="text-sm text-black dark:text-gray-400 mb-3">
              <FaSchool className="inline mr-2 text-purple-500" />
              {edu.institution}
            </p>

            {/* Período */}
            <p className="text-xs text-black dark:text-gray-500 mb-4">
              <FaGraduationCap className="inline mr-2 text-purple-500" />
              {edu.period}
            </p>

            {/* Situação */}
            <span
              className="inline-block bg-purple-300 dark:bg-purple-500/20 
              text-purple-900 dark:text-purple-300 
              px-3 py-1 rounded-full text-xs"
            >
              {edu.situation}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}