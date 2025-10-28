import imgPerfil from '../assets/img/foto-perfil/foto-perfil.png';
import setaIcon from '../assets/img/icons/Graphic.png';
import curriculoDownload from '../assets/curriculo/curriculo-brendha-rodrigues.pdf';

export function Hero() {
    return(
        <>
        {/* Section inicio  */}
        <section id="inicio" className="bg-[#1b1325] flex flex-col mt-15 md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-12">
        <div className="max-w-xl text-center md:text-left">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
      Olá, me chamo <span className="text-[#64ffda] italic">Brendha</span>
      </h2>
      <h3 className="text-white text-lg font-semibold mb-2">
        Desenvolvedora Front-End e estudante de Análise e Desenvolvimento de Sistemas
      </h3>
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
       Com mais de 3 anos de experiência em desenvolvimento Front-End. Com conhecimentos sólidos em HTML, CSS e JavaScript,
       além de criar interfaces modernas e responsivas, prezando pela experiência do usuário e pelas boas práticas de desenvolvimento.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <a href={curriculoDownload} download className="text-white px-6 py-2 border border-white rounded-lg text-sm hover:bg-white hover:text-black transition">
          Currículo
        </a>
        <a href="#contato" className="px-6 py-2 bg-[#7f5af0] text-white rounded-lg text-sm hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition">
          Entrar em contato <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <div className="max-w-md">
      <img src={imgPerfil} alt="Ilustração" className="w-full" />
      <img src={setaIcon} alt="Seta" />
    </div>
  </section>
</>
    )
}