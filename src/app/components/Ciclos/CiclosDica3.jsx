function CiclosDica3() {

  return (
    <div className="relative w-full">
      {/* Camada com gradiente e opacidade */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary to-primary-focus opacity-50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/registro.jpg')",
        }}
      ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 text-white text-center py-20 max-w-5xl mx-auto">
        <div className='border-white border-3 rounded-xl p-4'>
            <h1 className="text-4xl font-bold mb-4 pt-8 px-8">Registro e Monitoramento</h1>
            <p className="px-8 pb-8">
          Cada ação tem seu objetivo. Os avanços na conquista desses objetivos devem ficar bem claros, tanto para você como para os estudantes. Isso facilitará o diálogo e o vínculo de confiança entre você e sua turma. Mostre os desafios a enfrentar e os sucessos alcançados, aparando as arestas dos projetos dos jovens e revendo conceitos.
            </p>
            <br></br>
            <p className="pb-8">
        Assim, estabeleça alguns momentos para monitorar o processo. Essa será a oportunidade para eventuais correções e mudanças de percurso, assim como de recuos no caso de dificuldades. Ao longo de todo o andamento do Ciclo de Projetos, monitore e registre as atividades desenvolvidas, inclusive os reajustes de rota eventualmente necessários. Isso vai gerar um relato permanente que poderá ser feito na forma de um <strong>Diário de Bordo </strong>(cujo conceito e funcionamento será aprofundado na 2ª Etapa de aplicação do projeto).
            </p>
        </div>
        
      </div>
    </div>
  );
};

export default CiclosDica3