import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer (){
    return(
    <footer className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-12">
  <p className="text-sm text-gray-300 mb-4">Brendha Rodrigues 2025. Layout baseado no template do Rocketseat.</p>
  <div className="flex gap-4">
    <a href="https://github.com/brendhaed" className="text-white hover:text-purple-400"><FaGithub className="w-5 h-5"/></a>
      <a href="https://www.linkedin.com/in/brendhaed/" className="text-white hover:text-purple-400"><FaLinkedin className="w-5 h-5"/></a>
  </div>
</footer>
    )
}