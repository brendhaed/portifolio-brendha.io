
export function Education(){
    return(
    <section id="educacao" className="bg-[#2b1e42] rounded-2xl mx-6 md:mx-20 my-10 p-8 md:p-12 text-white">
    <h1 className="text-[#64ffda] text-sm mb-10 text-center w-full">Formação acadêmica</h1>

  <div className="flex flex-col md:flex-row items-center gap-10">
    <div className="w-full md:w-1/2">
      <h3 className="text-lg md:text-xl font-bold mb-2">
        Tecnólogo em Análise e Desenvolvimento de Sistemas
      </h3>
      <p className="text-white text-sm font-bold mb-1">Situação</p>
      <p className="text-white text-sm mb-4">Cursando 3º semestre</p>
      <p className="text-sm mb-2">Pontifícia Universidade Católica do Rio Grande do Sul - PUCRS</p>
      <p className="text-sm mb-4">Início: Out/2025 - Previsão conclusão: Mai/2027</p>
    </div>

    <div className="w-full md:w-1/2">
      <h3 className="text-lg md:text-xl font-bold mb-2">
        Técnico em Informática integrado ao Ensino Médio
      </h3>
      <p className="text-white text-sm font-bold mb-1">Situação</p>
      <p className="text-white text-sm mb-4">Concluído</p>
      <p className="text-sm mb-2">ETE 25 de Julho</p>
      <p className="text-sm mb-4">Início: Fev/2020 - Conclusão: Dez/2022</p>
    </div>
  </div>
</section>
    )
}