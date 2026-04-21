import cv from "../data/cv.json";

export function Experiences() {
  return (
    <section id="experiencias" className="max-w-3xl mx-auto p-8 ">
      <h1 className="text-[#f7b831] dark:text-[#FFD67D] text-sm mb-10 text-center w-full">
        Experiências
      </h1>
      <div className="relative border-l-4 border-purple-600 ml-4">
        {/* Itens  */}
        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-purple-600 rounded-full mt-1.5 -left-2 border border-white"></div>
          <h3 className="text-lg font-semibold text-white">
            {cv.experiences[0].role}
          </h3>
          <span className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            {cv.experiences[0].period}
          </span>
          <p className="text-sm text-black dark:text-gray-300">
            {cv.experiences[0].description}
          </p>
        </div>
      </div>
    </section>
  );
}
