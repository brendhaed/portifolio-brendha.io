import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import curriculoDownload from "../assets/curriculo/curriculo-brendha-rodrigues.pdf";
import vetor from "../assets/img/icons/vetor-hero.png";

export function Hero() {
  return (
    <>
      {/* Section inicio  */}
      <section
        id="inicio"
        className="bg-[#242424] flex flex-col mt-15 md:flex-col items-center justify-between px-8 md:px-20 py-30 gap-12"
      >
        {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#7C3AED,transparent_50%)] opacity-40">
          <img
            src={vetor}
            alt="background"
            class="w-full h-full object-cover opacity-30"
          />
        </div> */}
        
        <div className="max-w-xl text-center md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#9955E8]">
            Brendha E. Rodrigues
          </h2>
          <h3 className="text-white text-lg font-semibold mb-2">
            Desenvolvedora Front-End e estudante de Análise e Desenvolvimento de
            Sistemas
          </h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Com mais de 3 anos de experiência em desenvolvimento Front-End. Com
            conhecimentos sólidos em HTML, CSS e JavaScript, além de criar
            interfaces modernas e responsivas, prezando pela experiência do
            usuário e pelas boas práticas de desenvolvimento.
          </p>

          {/* Botões de ação */}
          <div className="flex justify-center gap-4 mb-4">
            <a
              href={curriculoDownload}
              download
              className="text-white px-6 py-2 border border-white rounded-lg text-sm hover:bg-white hover:text-black transition"
            >
              Currículo
            </a>
            <a
              href="#contato"
              className="px-6 py-2 bg-[#7f5af0] text-white rounded-lg text-sm hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition"
            >
              Entrar em contato <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* network */}
          <div className="flex justify-center gap-4 mt-8 ">
            <a href="https://github.com/brendhaed" className="bg-[#333333] px-5 py-5 rounded-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)]"><FaGithub className="text-white md:text-2xl"/></a>
            <a href="https://www.linkedin.com/in/brendhaed" className="bg-[#333333] px-5 py-5 rounded-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)]"><FaLinkedin className="text-white md:text-2xl"/></a>
            <a href="mailto:brendhaed@outlook.com" className="bg-[#333333] px-5 py-5 rounded-full hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)]"><FaEnvelope className="text-white md:text-2xl"/></a>
          </div>
        </div>
      </section>
      
    </>
  );
}
