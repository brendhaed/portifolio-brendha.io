import { useMemo } from "react";
import { useGithubLanguages } from "../hooks/useGithubLanguages";
import { FaGithub } from "react-icons/fa";
import { SkillBar } from "./SkillBar";

export function Skills() {
  const languages = useGithubLanguages("brendhaed");
  const total = useMemo(
    () => Object.values(languages).reduce((acc, value) => acc + value, 0) || 1,
    [languages],
  );

  const sorted = useMemo(
    () =>
      Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6),
    [languages],
  );

  return (
    <section
      id="skills"
      className="bg-white dark:bg-[#242424] p-10 mb-8 flex flex-col gap-4 items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-base md:text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
        <FaGithub className="text-purple-700 dark:text-purple-500" />
        Tecnologias mais usadas
      </h2>

      <div className="space-y-4 w-full max-w-6xl">
        {sorted.map(([lang, count], index) => {
          const percent = ((count / total) * 100).toFixed(0);

          return (
            <SkillBar
              key={lang}
              lang={lang}
              percent={Number(percent)}
              delay={index * 100}
            />
          );
        })}
      </div>
    </section>
  );
}
