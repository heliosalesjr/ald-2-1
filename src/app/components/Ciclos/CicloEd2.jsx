'use client'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function CicloEd2() {
  return (
    <>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
            <div className="md:w-1/2">
                
                <h1 className="text-4xl font-bold text-center text-gray-700 px-8">O Ciclo de Projeto do Educador</h1>
                <p className="text-lg font-gray-800 text-center mt-4 px-12">O Ciclo de Projeto do Educador é de cor azul e organiza as tarefas que você, professor, deve executar. São elas:</p>
                <div className='object-center py-8'>
                    <img src="/images/cpeducador.jpg" alt="CP Educador" className="lg:max-w-[400px] md:max-w-[250] mx-auto" />
                </div>
                
            </div>
            
            
        <div className="md:w-1/2 mt-8 md:mt-0">
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="1. Identificar principais conteúdos a trabalhar">
            
                
                <p className="text-slate-700">
                    É preciso ter clareza a respeito do conteúdo de Matemática e Educação Financeira a ser trabalhado neste programa, que contempla competências e habilidades esperadas pelo Pisa e pelo Saeb. Para isso, o Mapa Esquemático dos Conteúdos de Matemática (acessível aqui) pode contribuir. Leve em conta também as opções estabelecidas no Projeto Político-Pedagógico (PPP) de sua escola.
                </p><br></br>
                <p className="text-slate-700">
                    Você também pode utilizar o Quadro Geral (acessível aqui) para organizar os conteúdos de acordo com as etapas de desenvolvimento do projeto.
                </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="2. Fazer o diagnóstico">
            
                <p className="text-slate-700">
                    É importante que você e sua turma conheçam um pouco a realidade e as potencialidades de cada estudante, bem como os desafios exigidos em cada etapa do trabalho. Portanto, utilize atividades dinâmicas para conhecer sonhos, realidades e expectativas dos alunos, detectar o que eles já sabem dos temas de matemática a serem trabalhados e também descobrir com o que gostariam de trabalhar em seu projeto coletivo.
                </p>
                
            </AccordionItem>

            <AccordionItem key="3" aria-label="Accordion 3" title="3. Escrever o PDA (Planejamento Didático Ativo)">
            
                <p className="text-slate-700">
                    Levando em consideração o perfil da sua turma, você poderá descrever com mais segurança as estratégias e ferramentas adequadas para o trabalho, criando assim seu planejamento.
                </p>
                
            </AccordionItem>
            
            <AccordionItem key="4" aria-label="Accordion 4" title="4. Executar as atividades planejadas">   

                <p className="text-slate-700">
                    Recomenda-se que você inicie seu trabalho pela apresentação deste programa aos jovens, propondo, em seguida, as atividades previstas no seu PDA e acompanhando o desenvolvimento do Projeto Coletivo. Não se esqueça de que tanto professor quanto estudantes devem registrar as atividades executadas.
                </p><br></br>
                <p className="text-slate-700">
                    O Registro do Educador:
                </p><br></br>
                <p className="text-slate-700">
                    À medida que avança nas ações, não se esqueça de anotar o que acontece em cada etapa. Você terá, desse modo, um Diário de Bordo, que se constituirá em um valioso instrumento de trabalho.
                </p><br></br>
                <p className="text-slate-700">
                    O Registro dos Jovens:
                </p><br></br>
                <p className="text-slate-700">
                    Peça aos jovens que registrem as aulas e as atividades do Projeto Coletivo. Os registros podem ser feitos através de textos, fotos, vídeos etc. Essas anotações vão compor o relato da experiência de seu projeto, importante para o monitoramento da aprendizagem.
                </p><br></br>
            
            </AccordionItem>

            <AccordionItem id="5" key="5" aria-label="Accordion 5" title="5. Avaliar os resultados">
                
                <p className="text-slate-700">
                    Ao fim das atividades do programa, é importante avaliar até que ponto foram alcançados os objetivos pretendidos. Isso permitirá a você e à sua turma celebrar as conquistas; identificar o que não foi atingido e levantar possíveis causas; e relatar aos interessados (direção, colegas, outros professores, familiares) tudo o que foi feito.
                </p><br></br>
                <p className="text-slate-700">
                    A obtenção dos resultados esperados está intimamente ligada às avaliações de processo. Estabelecendo critérios de avaliação capazes de promover avanços significativos, seu PDA e o Projeto Coletivo contarão com estratégias flexíveis de construção do conhecimento, conforme a necessidade da turma.
                </p><br></br>

            </AccordionItem>

            <AccordionItem id="6" key="6" aria-label="Accordion 6" title="6. Planejar a Culminância">
                <p className="text-slate-700">
                    Ao fim do programa, verificados os resultados alcançados, é importante compartilhá-los com outras turmas e colegas, numa espécie de prestação de contas a todos os envolvidos.
                </p><br></br>
                <p className="text-slate-700">
                    É aí que entra a comunicação, realizada por meio dos registros e anotações feitos durante o processo. Isso pode gerar uma apresentação (documento, PPT, folder, álbum) que servirá de exemplo e estímulo para outros educadores e novas turmas. Essa comunicação poderá ser feita em um evento de culminância, no qual a turma exporá os resultados do seu projeto à comunidade e aos demais segmentos da escola.
                </p>
            </AccordionItem>

        </Accordion>
        
      </div>
      </div>
    
    </>
  )
}

export default CicloEd2