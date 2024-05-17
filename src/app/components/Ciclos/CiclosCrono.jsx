"use client"

const CiclosCrono = () => {
    return (
      <div className="bg-slate-600 pb-8">
        
        <div className="max-w-2xl mx-auto p-4">
            
            <h1 className="text-center font-bold text-4xl text-white pt-8">Atividades dos estudantes e dos professores</h1>
            <p className="text-white p-8 text-center">Para facilitar a visualização da sequência de atividades a serem executadas simultaneamente pelos professores e pelos estudantes consulte a linha do tempo abaixo: </p>
            <div className="grid grid-cols-2 grid-rows-10 gap-4">
            <div className="border border-white p-4 rounded-xl">
                <h1 className="text-center flex items-center justify-center h-full text-white font-bold text-2xl p-4">Ciclo de Projeto do Educador</h1>
            </div>
            <div className="border border-white p-4 rounded-xl">
            <h1 className="text-center flex items-center justify-center h-full text-white font-bold text-2xl p-4">Ciclo de projeto Coletivo</h1>
            </div>
            
            <div className="bg-emerald-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Definição dos conteúdos</p>
            </div>
            <div className="">
                
            </div>
            
            <div className="bg-emerald-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Diagnóstico</p>
            </div>
            <div>
            </div>
            
            <div> 
            </div>
            <div className="bg-orange-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Definição do tema</p>
            </div>
            
            <div className="">
            </div>
            <div className="bg-orange-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Diagnóstico</p>
            </div>
            
            <div> 
            </div>
            <div className="bg-orange-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Montagem do Plano de Ação</p>
            </div>

            <div className="bg-emerald-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Montagem do Planejamento Didático Ativo</p>
            </div>
            <div>
            </div>
            
            <div className="bg-emerald-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Execução das atividades</p>
            </div>
            <div className="bg-orange-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Execução das atividades</p>
            </div>
            <div className="bg-emerald-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Avaliação</p>
            </div>
            <div className="bg-orange-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Avaliação</p>
            </div>
            <div className="bg-emerald-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Culminância</p>
            </div>
            
            <div className="bg-orange-200 p-4 rounded">
                <p className="text-center flex items-center justify-center h-full font-semibold">Culminância</p>
            </div>
            </div>
        </div>
        <p className=' p-12 max-w-5xl mx-auto text-white text-center'>
            Este recurso nos acompanhará nas próximas fases da execução do projeto, sempre destacando as atividades a serem executadas em cada momento.
        </p>
      </div>
    );
  };
  
  export default CiclosCrono;