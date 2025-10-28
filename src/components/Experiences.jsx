
export function Experiences(){
    return(
    <section id="experiencias" className="max-w-3xl mx-auto p-8">
    <h1 className="text-[#64ffda] text-sm mb-10 text-center w-full">Experiências</h1>
    <div className="relative border-l-4 border-purple-600 ml-4">

     {/* Item 1  */}
    <div className="mb-10 ml-6">
      <div className="absolute w-4 h-4 bg-purple-600 rounded-full mt-1.5 -left-2 border border-white"></div>
      <h3 className="text-lg font-semibold text-white">Estagiária de TI</h3>
      <span className="block mb-2 text-sm font-medium text-gray-400">Mar/2022 - Set/2022</span>
      <p className="text-sm text-gray-300">
        Estágio obrigatório do curso de Técnico em Informática. Onde realizei o desenvolvimento e 
        manutenção de consultas SQL, com foco na otimização de buscas e melhoria de desempenho em banco de dados 
        PostgreSQL.Suporte na modelagem de dados, criação de procedures, views e rotinas automatizadas.
        Análise e resolução de problemas relacionados à integridade e performance do banco de dados.
      </p>
    </div>

  </div>
</section>
    )
}