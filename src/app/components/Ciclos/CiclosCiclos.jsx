'use client'
import React from "react";



export default function CiclosCiclos() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-800 py-4 pt-8 text-center">Ciclos de Projeto</h1>
        <p className="text-lg mt-4 py-4 text-slate-600 p-4">
        São diagramas contendo a sequência de etapas a serem desenvolvidas tanto por você, professor, quanto pelos estudantes. O Ciclo de Projeto é uma forma interessante de visualizar uma atividade que precisa ser bem planejada – com começo, meio e fim – para alcançar os objetivos almejados. Vamos conhecer esta ferramenta?
        </p>

      </div>
      
      <div className="container mx-auto max-w-5xl flex mt-8">
          
          <div className="w-1/3 max-w-[260px] py-4">
            <img
              src="images/cpeducador.jpg"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          <div className="w-2/3 px-4 m-4 py-4">
            <h1 className="font-bold text-2xl text-slate-800 mb-4">
            Ciclo de Projeto do Educador
            </h1>
            <p className="text-base text-slate-600 py-2">
            O Ciclo de Projeto do Educador é a ferramenta de planejamento voltada para o professor e mostra como o docente deve iniciar o seu planejamento, passando pelas etapas 1 (Definição de conteúdos), 2 (Diagnóstico e perfil da turma) e 3 (Montagem e apresentação do PDA) antes que os estudantes iniciem seu próprio Projeto Coletivo. Posteriormente, seguem-se as etapas 4 (Execução das atividades), 5 (Avaliação de resultados) e 6 (Culminância). Nestas, os estudantes estarão desenvolvendo seu próprio projeto.
            </p>
          </div>
      </div>

      <div className="container mx-auto max-w-5xl flex mt-8">
          

          <div className="w-2/3 px-4 m-4 py-4">
                <h1 className="font-bold text-2xl text-slate-800 mb-4">
                Ciclo de Projeto Coletivo
                </h1>
                <p className="text-base text-slate-600 py-2">
                O Ciclo do Projeto Coletivo é a ferramenta de planejamento voltada para os estudantes para a Escolha de temas (Etapa 1), Diagnóstico (Etapa 2) e Plano de ação (Etapa 3) antes dele começar a ser executado sob sua orientação durante as aulas. Depois, você pode aproveitar os desafios da prática para abordar os conteúdos programados nas etapas seguintes do projeto dos estudantes: 4 (Execução das atividades), 5 (Avaliação de resultados) e 6 (Culminância).
                </p>
              
                
          </div>
          
          <div className="w-1/3 max-w-[280px] py-4">
            <img
              src="images/cpcoletivo.png"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          
      </div>
      <div className="container mx-auto max-w-5xl bg-slate-200 rounded-xl p-4">
        
        <p className="text-lg mt-4 py-4 text-slate-600 p-4">
        Ou seja, você terá orientações sobre como desenvolver o Ciclo de Projeto de Educador para auxiliar os estudantes a desenvolverem o Ciclo do Projeto Coletivo, de responsabilidade deles, de modo a elaborar, aplicar, executar, avaliar, sistematizar e comunicar seu Projeto Coletivo.
        </p>

      </div>
    
    </>
  );
}