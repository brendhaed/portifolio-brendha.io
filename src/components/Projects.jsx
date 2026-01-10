import { GoArrowUpRight } from 'react-icons/go'
import projeto1Img from '../assets/img/projects/meu-projeto-1.png'
import projeto2Img from '../assets/img/projects/meu-projeto-2.png'
import projeto3Img from '../assets/img/projects/meu-projeto-3.png'
import projeto4Img from '../assets/img/projects/meu-projeto-4.png'  
import { MdLayers } from "react-icons/md";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export function Projects(){
    return(
    <section id="projetos"className="px-8 md:px-20 py-16 bg-[#1b1325]">
    <div className="w-full text-center mb-12">
    <h3 className="text-[#64ffda] tracking-wide text-sm mb-2">Projetos</h3>
    <h1 className="text-3xl md:text-4xl font-bold text-white">Dê uma olha nos meus projetos</h1>
  </div>

  <div className="grid gap-10 md:grid-cols-3 justify-items-center">

  {/* Card 1  */}
  <div className="bg-[#2b1e42] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
  <div className="relative mb-4">
  <img src={projeto1Img} alt="Foto projeto 1" className="rounded w-full"/>
  <a href="https://github.com/brendhaed/sistema-web-minimercado" target="_blank"
     className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition">
    <i className="fa-brands fa-github"></i>
  </a>
</div>
  <p className="text-white text-sm mb-1">Maio 2025 - Junho 2025</p>
  <h2 className="text-white text-xl font-semibold mb-2">Projeto de sistema web - Minimercado</h2>
  <p className="text-sm text-gray-400 mb-4">
    Projeto que desenvolvi para a disciplina de Fundamentos de Sistemas Web.
  </p>
  <div className="text-center mb-4">
    <a href="https://brendhaed.github.io/sistema-web-minimercado/" target="_blank" className="text-purple-400 text-sm hover:underline transition">
      Ver projeto no ar <GoArrowUpRight className="inline-block ml-1"/>
    </a>
  </div>
  <div className="flex gap-3 justify-center text-purple-300 text-xl">
    <FaHtml5/>
    <FaCss3Alt/>
    <FaJsSquare/>
    <FaBootstrap/>
  </div>
</div>

  {/* Card 2  */}
    <div className="bg-[#2b1e42] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
  <div className="relative mb-4">
  <img src={projeto2Img} alt="Foto projeto 2" className="rounded w-full"/>
  <a href="https://github.com/brendhaed/projeto-previsao-do-tempo" target="_blank"
     className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition">
    <i className="fa-brands fa-github"></i>
  </a>
</div>
  <p className="text-white text-sm mb-1">Outubro 2024 - Outubro 2024</p>
  <h2 className="text-white text-xl font-semibold mb-2">Projeto de Previsão do Tempo</h2>
  <p className="text-sm text-gray-400 mb-4">
    Projeto que desenvolvi para exercitar meus conhecimentos em Javascript.
  </p>
  <div className="text-center mb-4">
    <a href="https://brendhaed.github.io/projeto-previsao-do-tempo/" target="_blank" className="text-purple-400 text-sm hover:underline transition">
      Ver projeto no ar <GoArrowUpRight className="inline-block ml-1"/>
    </a>
  </div>
  <div className="flex gap-3 justify-center text-purple-300 text-xl">
    <FaHtml5 />
    <FaCss3Alt/>
    <FaJsSquare/>
  </div>
</div>

  {/* Card 3  */}
  <div className="bg-[#2b1e42] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
  <div className="relative mb-4">
  <img src={projeto3Img} alt="Foto projeto 3" className="rounded w-full"/>
  <a href="https://github.com/brendhaed/landing-page-schoolTech" target="_blank"
     className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition">
    <i className="fa-brands fa-github"></i>
  </a>
</div>
  <p className="text-white text-sm mb-1">Setembro 2025 - Outubro 2025</p>
  <h2 className="text-white text-xl font-semibold mb-2">Projeto Landing Page Escola Tech</h2>
  <p className="text-sm text-gray-400 mb-4">
    Projeto que desenvolvi para aplicar os conhecimentos com Next
  </p>
  <div className="text-center mb-4">
    <a href="https://landing-page-school-tech.vercel.app/" target="_blank" className="text-purple-400 text-sm hover:underline transition">
      Ver projeto no ar <GoArrowUpRight className="inline-block ml-1"/>
    </a>
  </div>
  <div className="flex gap-3 justify-center text-purple-300 text-xl">
    <SiNextdotjs />
    <SiTailwindcss/>
  </div>
</div>

  {/* Card 4  */}
  <div className="bg-[#2b1e42] rounded-xl shadow-md p-6 max-w-sm w-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transform transition duration-300 hover:scale-105">
  <div className="relative mb-4">
  <img src={projeto4Img} alt="Foto projeto 4" className="rounded w-full"/>
  <a href="https://github.com/brendhaed/crud-series-next" target="_blank"
     className="absolute top-2 right-2 bg-[#2b1e42]/80 w-10 h-10 flex items-center justify-center rounded-full text-purple-300 text-xl hover:text-purple-400 transition">
    <i className="fa-brands fa-github"></i>
  </a>
</div>
  <p className="text-white text-sm mb-1">Novembro 2025 - Janeiro 2026</p>
  <h2 className="text-white text-xl font-semibold mb-2">Projeto CRUD de Séries</h2>
  <p className="text-sm text-gray-400 mb-4">
    Projeto que desenvolvi na Disciplina de Desenvolvimento Front-end 
  </p>
  <div className="text-center mb-4">
    <a href="https://crud-series-next.vercel.app/" target="_blank" className="text-purple-400 text-sm hover:underline transition">
      Ver projeto no ar <GoArrowUpRight className="inline-block ml-1"/>
    </a>
  </div>
  <div className="flex gap-3 justify-center text-purple-300 text-xl">
    <SiNextdotjs />
    <MdLayers/>
  </div>
</div>

  </div>
</section>
    )
}