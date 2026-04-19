import cv from "../data/cv.json";
export function Education() {
  return (
    <section
      id="educacao"
      className="bg-[#242424] rounded-2xl mx-6 md:mx-20 my-10 p-8 md:p-12 text-white"
    >
      <h1 className="text-[#FFD67D] text-sm mb-10 text-center w-full">
        Formação acadêmica
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            {cv.education[0].course}
          </h3>
          <p className="text-white text-sm font-bold mb-1">Situação</p>
          <p className="text-white text-sm mb-4">{cv.education[0].situation}</p>
          <p className="text-sm mb-2">{cv.education[0].institution}</p>
          <p className="text-sm mb-4">{cv.education[0].period}</p>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            {cv.education[1].course}
          </h3>
          <p className="text-white text-sm font-bold mb-1">Situação</p>
          <p className="text-white text-sm mb-4">{cv.education[1].situation}</p>
          <p className="text-sm mb-2">{cv.education[1].institution}</p>
          <p className="text-sm mb-4">{cv.education[1].period}</p>
        </div>
      </div>
    </section>
  );
}