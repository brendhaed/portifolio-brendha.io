import { useState, useEffect} from 'react';
import imgPerfil from '../assets/img/foto-perfil/foto-perfil.png';
import emailjs from "@emailjs/browser";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  emailjs.init({
    publicKey: "1Ef_i9ipsVSz32RDZ",
  });
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_6cq0i3b";
    const templateId = "template_aa2h0in";

    emailjs
      .send(serviceId, templateId, contactForm, "1Ef_i9ipsVSz32RDZ")
      .then(() => {
        Toastify({
          text: "Mensagem enviada com sucesso!",
          duration: 3000,
          style: {
            background: "#8a2be2",
            color: "#f4f4f4",
          },
        }).showToast();

        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        Toastify({
          text: "Erro ao enviar a mensagem.",
          duration: 3000,
          style: {
            background: "#dc3545",
            color: "#f4f4f4",
          },
        }).showToast();
      })
      .finally(() => {
        setLoading(false);
      });
  };

    return(
  <section id="contato" className="bg-[#2b1e42] rounded-2xl px-6 md:px-12 py-12 mx-6 md:mx-20 mt-10 text-white">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    <div className="md:w-1/2 text-center md:text-left">
      <img src={imgPerfil} alt="Foto Perfil" className="w-24 h-24 mx-auto md:mx-0 rounded-full border-4 border-white mb-4"/>

      <h4 className="text-sm text-purple-400 mb-1">Contato</h4>
      <h2 className="text-xl font-semibold mb-4">Gostou do meu trabalho? Entre em contato!</h2>

      <p className="text-sm text-gray-300 mb-4">
        Estou sempre disponível para um bate-papo. Mande-me um e-mail para  
        <a href="mailto:brendhaedua67@gmail.com" className="text-green-300 hover:underline"> brendhaed@outlook.com </a> 
        ou me avise nas redes sociais. 
      </p>

      <div className="flex justify-center md:justify-start gap-4 mt-4">
        <a href="https://github.com/brendhaed"><i className="fab fa-github text-white text-xl hover:text-purple-400"></i></a>
        <a href="https://www.linkedin.com/in/brendhaed/"><i className="fab fa-linkedin text-white text-xl hover:text-purple-400"></i></a>
        <a href="#"><i className="fab fa-instagram text-white text-xl hover:text-purple-400"></i></a>
      </div>
    </div>

    {/* formulario */}

    <div className="md:w-1/2 w-full">
  <form onSubmit={handleSubmit} id="contact-form" className="w-full space-y-4">
    <input type="text" name="name" placeholder="Nome" id="name" value={contactForm.name} onChange={handleChange} className="w-full px-4 py-2 bg-[#1b1325] border border-transparent rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
    <input type="email" name="email" placeholder="E-mail" id="email" value={contactForm.email} onChange={handleChange} className="w-full px-4 py-2 bg-[#1b1325] border border-transparent rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
    <input type="text" name="subject" placeholder="Assunto" id="subject" value={contactForm.subject} onChange={handleChange} className="w-full px-4 py-2 bg-[#1b1325] border border-transparent rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
    <textarea rows="4" name="message" placeholder="Sua mensagem" id="message" value={contactForm.message} onChange={handleChange} className="w-full px-4 py-2 bg-[#1b1325] border border-transparent rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
    
    <div className="flex justify-center">
      <button type="submit" id="submit-button" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] transition text-sm">
         <i className="fa-solid fa-arrow-right"></i>
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>
    </div>
  </form>
</div>
</div>
</section>
    )
}