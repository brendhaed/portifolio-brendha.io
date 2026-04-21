import cv from "../data/cv.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-12">
      <p className="text-sm text-black dark:text-gray-300 mb-4">
        &copy; Brendha Rodrigues 2026.
      </p>
      <div className="flex gap-4">
        <a
          href={cv.contact.github}
          className="text-black dark:text-white hover:text-purple-400"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href={cv.contact.linkedin}
          className="text-black dark:text-white hover:text-purple-400"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
