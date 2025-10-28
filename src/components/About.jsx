import imgPerfil from '../assets/img/foto-perfil/foto-perfil.png';
import curriculoDownload from '../assets/curriculo/curriculo-brendha-rodrigues.pdf';
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export function About(){
    return(
         <>
         <section id="sobre"className="bg-[#2b1e42] rounded-2xl mx-6 md:mx-20 my-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-white">
         <div className="w-full md:w-1/2 flex justify-center">
         <img src={imgPerfil} alt="Foto perfil" className="w-50 h-50 rounded-full"/>
         </div>
         
         <div className="w-full md:w-1/2">
         
         {/* Tecnologias  */}
         <div className="flex gap-3 text-purple-300 text-xl mb-4">
            <FaHtml5 />
            <FaCss3Alt />
            <FaBootstrap />
            <SiTailwindcss/>
            <FaJs />
            <FaReact />
            <SiNextdotjs />
            <FaGitAlt />
            <i className="fa-brands fa-python"></i>
        </div>
    
    <h3 className="text-[#64ffda] text-sm mb-10">Sobre mim</h3>
    <h2 className="text-xl md:text-2xl font-bold mb-4">
      Sou uma desenvolvedora de software em busca da minha primeira oportunidade de trabalho.
    </h2>

    <p className="text-sm text-gray-300 leading-relaxed mb-6">
      Além de programar, sou apaixonada por café, gatos e por explorar novos lugares no meu tempo
      livre. Estou em busca de uma oportunidade para aplicar minhas habilidades e todo meu 
      entusiasmo em uma empresa de tecnologia, contribuindo ativamente para o crescimento dos 
      projetos e também para o meu desenvolvimento profissional.
    </p>

    <div className="flex justify-center">
    <a href={curriculoDownload} download className="inline-block bg-[#7f5af0] px-5 py-2 rounded-lg text-sm hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition">
      Meu currículo
    </a>
    </div>

  </div>
</section>
</>
    )
}