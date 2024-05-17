import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const AtiDiag1 = () => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      <div className="md:w-1/2 pt-8 pb-8">
        
        <h1 className="text-3xl font-bold text-center text-slate-700">Diagnóstico 1 - Conhecimentos prévios de Educação Financeira e Matemática</h1>
        <p className="font-gray-800 mt-4 pt-4">
        Com este diagnóstico, é possível avaliar até que ponto os estudantes dominam os conteúdos que são pré-requisitos
            para a aplicação deste programa. Se os jovens não dominam conhecimentos básicos, não adianta avançar com o programa
            sem resolver as dificuldades prévias. Nesse caso, é preciso adotar estratégias para recuperar o conhecimento de forma
            que todos possam avançar no aprendizado, especialmente ao aplicar os conceitos nos casos de uso do dinheiro e educação
            financeira. Portanto, com esse primeiro diagnóstico, você consegue ao mesmo tempo:
            <ul className="list-disc pl-6 mt-4 mx-4">
              <li>Avançar nos conteúdos de Matemática e Educação Financeira.</li>
              <li>Recuperar alguns pré-requisitos de Matemática para quem ainda não os domina.</li>
          </ul>
        </p>
        
      </div>
      <div className="p-8 md:w-1/2 mt-8 md:mt-0 w-full">
       
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="O que fazer antes?">
              <p className='text-slate-700'>
              Antes, porém, avise aos estudantes que o objetivo é saber o que eles já conhecem e não atribuir nota,
                porque assim eles se sentirão mais confortáveis com o livro e o projeto que vão realizar. Para detectar
                competências e habilidades, um bom ponto de partida é pensar: “Que conteúdos prévios são necessários para
                abordar esses temas de Educação Financeira e Matemática?”.
              </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Realizando o diagnóstico">
              <p className='text-slate-700'>
              Para realizar este diagnóstico, você poderá elaborar uma sondagem por meio do Formulários Google e enviá-la
                aos estudantes via Google Sala de Aula, deixando o link disponível na aba Atividades da turma
                correspondente. Você poderá visualizar os resultados de forma assíncrona, à medida que os jovens realizam
                as atividades. Como todas as respostas ficarão disponíveis em seu Google Drive, você poderá acessá-las
                sempre que necessário ao longo do projeto. Você pode se inspirar em um modelo clicando <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_vQh5GpJaMKJxkzkDFi8VyFGxtnU5gOJQC_5AnFSXHVH4wA/viewform" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-purple-900"> aqui</a>.

              </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Importante">
              <p className='text-slate-700'>
              Não envie esse formulário para seus alunos. Você precisa criar o seu para conseguir acessar as
                respostas. Caso você envie o link do modelo para seus estudantes, não teremos como identificar quais foram
                as respostas da sua turma.
              </p>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AtiDiag1;

