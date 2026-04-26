import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import cv from "../data/cv.json";

export function Skills() {
  const [openHard, setOpenHard] = useState(false);
  const [openSoft, setOpenSoft] = useState(false);
  return (
    <section
      className="flex flex-col items-center py-20 gap-10 "
      data-aos="fade-up"
      data-aos-duration="1000">
      <h1 className="text-2xl font-bold mb-6 ">Skills</h1>
      <div className="flex flex-col gap-3 w-full max-w-xl ">
        {/* hard skills */}
        <div
          className={`
            flex items-center justify-between mx-10 md:mx-0 p-3 rounded-lg transition
            ${openHard ? "bg-purple-500/20 border border-purple-400" : "bg-transparent"}
            `}>
          <h2 className="text-lg font-semibold">Hard Skills</h2>
          <button onClick={() => setOpenHard(!openHard)}>
            {openHard ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </button>
        </div>

        {openHard && (
          <ul className="flex flex-wrap gap-3 mx-12 md:mx-0">
            {cv.skills.map((skill, index) => (
              <li
                key={index}
                className="
                px-3 py-1
                rounded-full
                border border-purple-400/50 
                bg-purple-500/10 
                hover:bg-purple-500/20
                text-sm
                transition
              "
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

        {/* Soft Skills */}
        <div
          className={`
          flex items-center justify-between mx-10 md:mx-0 p-3 rounded-lg
          transition
          ${openSoft ? "bg-purple-500/20 border border-purple-400" : "bg-transparent"}
        `}>
          <h2 className="text-lg font-semibold">Soft Skills</h2>

          <button onClick={() => setOpenSoft(!openSoft)}>
            {openSoft ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </button>
        </div>

        {openSoft && (
          <ul className="flex flex-wrap gap-3 mx-12 md:mx-0">
            {cv.softSkills.map((skill, index) => (
              <li
                key={index}
                className="
                px-3 py-1
                rounded-full
                border border-purple-400/50 
                bg-purple-800/10 
                dark:bg-purple-500/10
                hover:bg-purple-500/20
                text-sm
                transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
