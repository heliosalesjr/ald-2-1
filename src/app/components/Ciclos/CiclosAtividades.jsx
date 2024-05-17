import React from 'react';

const CiclosAtividades = () => {
  return (
    <div className='bg-slate-500'>
      <h1 className="text-4xl font-bold text-center text-white p-8">
        Atividades dos estudantes e dos professores
      </h1>
      <p className='pb-8 text-center text-white'>
        Para facilitar a visualização da sequência de atividades a serem executadas simultaneamente pelos professores e pelos estudantes, consulte a linha do tempo abaixo: 
      </p>
      <div className="max-w-2xl mx-auto">
        <table className="border-collapse border-2 border-white mx-auto w-full">
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '50%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="border border-white p-4 text-white bg-primary text-center font-bold text-lg">Ciclo de Projeto do Educador</td>
              <td className="border border-white p-4 text-white bg-primary text-center font-bold text-lg">Ciclo de Projeto Coletivo</td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center">Definição dos conteúdos</td>
              <td className="border border-white border-b-transparent p-4 text-white text-center"></td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center">Diagnóstico</td>
              <td className="border border-white p-4 text-white text-center"></td>
            </tr>
            <tr>
              <td className="border border-b-transparent border-white p-4 text-white text-center"></td>
              <td className="border border-white p-4 text-white text-center">Definição do tema</td>
            </tr>
            <tr>
              <td className="border border-b-transparent border-white p-4 text-white text-center"></td>
              <td className="border border-white p-4 text-white text-center">Diagnóstico</td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center"></td>
              <td className="border border-white p-4 text-white text-center">Montagem do Plano de ação</td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center">Montagem do Planejamento Didático Ativo (PPDA)</td>
              <td className="border border-white p-4 text-white text-center"></td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center">Execução das atividades</td>
              <td className="border border-white p-4 text-white text-center">Execução das atividades</td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center">Avaliação</td>
              <td className="border border-white p-4 text-white text-center">Avaliação</td>
            </tr>
            <tr>
              <td className="border border-white p-4 text-white text-center">Culminância</td>
              <td className="border border-white p-4 text-white text-center">Culminância</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='mx-8 p-12 max-w-5xl mx-auto text-white text-center'>
        Este recurso nos acompanhará nas próximas fases da execução do projeto, sempre destacando as atividades a serem executadas em cada momento.
      </p>
    </div>
  );
};

export default CiclosAtividades;












