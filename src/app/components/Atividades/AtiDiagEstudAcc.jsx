import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
function AtiDiagEstudAcc() {
    return (
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
          <div className="md:w-1/2 pt-8 pb-8">
            {/* Conteúdo da primeira coluna */}
            <h1 className="text-4xl font-bold text-center text-slate-700">Diagnósticos para os estudantes: assunto do Projeto Coletivo</h1>
            <p className="font-gray-800 mt-4 pt-4">
                Ao lado, temos orientações para construir os diagnósticos para estudantes e abaixo os três tipo de projeto que geralmente aparecem quando estamos executando o processo.

            </p>
            {/* Adicione sua imagem aqui, se necessário */}
          </div>
          <div className="p-8 md:w-1/2 mt-8 md:mt-0 w-full">
            {/* Conteúdo da segunda coluna */}
            <Accordion variant='bordered'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Protagonismo">
                  <p className='text-slate-700'>
                  Os alunos são os grandes protagonistas deste programa, a começar que são os responsáveis por definir com o que querem trabalhar em seu Projeto Coletivo. A definição do tema pode ser feita após o diagnóstico 2, uma vez que os estudantes já terão passado por atividades de reflexão sobre si mesmos. A escolha deve também ser democrática, abrindo espaços para que todos falem e exponham suas expectativas.

                  </p>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Temas">
                  <p className='text-slate-700'>
                  O Levantamento de temas para o Projeto Coletivo pode ocorrer através de uma troca de ideias sobre os sonhos, dificuldades e aspirações dos jovens. Em alguns casos, podem ser formados pequenos grupos, cada um com seu projeto.

                  </p>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="A turma">
                  <p className='text-slate-700'>
                  Ao realizar o diagnóstico da turma, muitas vezes os educadores acabam se surpreendendo e se sensibilizando – seu olhar muda. Por sua vez, o jovem adquire maior confiança e percebe que é possível sonhar. Em pouco tempo, começa a se interessar em montar seus projetos pessoais e/ou profissionais. É nesse momento, também, que a turma passa a se conhecer melhor. Podem surgir sentimentos de admiração, compreensão e solidariedade entre os jovens, já que eles têm de ouvir uns aos outros sobre sua vida fora da escola.

                  </p>
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      );
    };

export default AtiDiagEstudAcc