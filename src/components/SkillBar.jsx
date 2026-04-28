import { useEffect, useState } from "react";

export function SkillBar({ lang, percent }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000;
    const stepTime = 10;
    const increment = percent / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= percent) {
        start = percent;
        clearInterval(timer);
      }

      setValue(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{lang}</span>
        <span>{Math.floor(value)}%</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full">
        <div
          className="h-2 bg-purple-700 dark:bg-purple-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}