import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

const CicloCl4 = () => {
  const cardData = [
    { title: "1. Escolher um assunto", content: "Uma aspiração, questão, sonho... justificando essa escolha." },
    { title: "2. Fazer um diagnóstico da situação.", content: "Como você avalia o andamento das coisas?" },
    { title: "3. Elaborar um Plano de Ação", content: "Isto é, propor atividades e estratégias para atingir os objetivos, incluindo a atribuição de funções, o cronograma e um plano orçamentário." },
    { title: "4. Executar as atividades", content: "Que foram planejadas com registros e monitoramento para correção de rota ao longo do processo." },
    { title: "5. Avaliar", content: "Ao fim do percurso, em que medida se chegou ao resultado esperado." },
    { title: "6. Planejar...", content: "...a celebração das conquistas e relatar essa experiência a colegas e demais interessados." },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <div
        key={index}
        className={`w-full md:w-1/2 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}
        style={{ Width: '200px' }}
      >
        <Card className="h-full">
          <CardBody className='flex flex-col justify-center items-center'>
            <h1 className="text-center font-bold text-orange-600">{card.title}</h1>
            <p className="text-center">{card.content}</p>
          </CardBody>
        </Card>
      </div>
    ));
  };

  return (
    <>
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-700 p-8">
            O Ciclo do Projeto Coletivo
            </h1>
            <p className='pb-8 text-center'>
            Este ciclo, de cor laranja, refere-se às atividades que os alunos deverão desenvolver para o andamento do projeto. São elas:
            </p>
                <div className="max-w-2xl mx-auto">
                    <div className="grid md:flex md:flex-col">
                        {renderCards()}
                    </div>
                </div>
                <div className='max-w-3xl mx-auto bg-slate-200 rounded-xl p-8 m-8'>
                  <p className=' text-center p-2 m-2'>
                  No Caderno do Educador, você encontra relatos da professora Vilma e do professor André. São histórias fictícias, porém baseadas em fatos, que auxiliam na compreensão da proposta metodológica. Para conhecer a professora Vilma e sua turma {" "}
                      <a
                          href="https://drive.google.com/file/d/13m5qh4MRVykxmLi9iu_raKOVO81JTSBK/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:text-blue-500 underline"
                      >
                          clique aqui
                      </a>
                      . Para conhecer o professor André e seus alunos{" "}
                      <a
                          href="https://drive.google.com/file/d/1XRoFT3ZdDCn4mhsjowIEMXqbVu910PrI/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:text-blue-500 underline"
                      >
                          clique aqui
                      </a>
                      . Neste 
                      <a
                          href="https://drive.google.com/file/d/1QvCH0T4kdnIYtovkMPHThx5PJOKPoDGw/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:text-blue-500 underline"
                      > link</a>, 
                      você pode conferir um exemplo de como esses relatos serão utilizados, com o exemplo do relato de culminância dos projetos das turmas de ambos os professores.
                  </p>
                </div>
                
        </div>
    </>
    
  );
};

export default CicloCl4;




