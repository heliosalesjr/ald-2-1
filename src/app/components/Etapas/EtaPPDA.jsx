'use client'
import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import { motion } from 'framer-motion'

function EtaPPDAFinal() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl py-8">
            <h1 className="font-bold text-2xl md:text-5xl sm:text-3xl text-gray-700 py-4 text-center">Pequeno Projeto Didático Ativo (PPDA)</h1>
            <p className="mt-4 p-4 text-gray-800">
                Existem diversas maneiras de se trabalhar com projetos. Para a aplicação deste programa, sugerimos o desenvolvimento de Pequenos Projetos Didáticos Ativos (PPDA), que são projetos de curta duração (mensal, bimestral ou trimestral), cuja função é mobilizar e engajar os estudantes a solucionar um problema relacionado ao tema que estão estudando. Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar.
            </p>
      </div>

      <motion.div className="flex flex-col md:flex-row gap-4 mx-auto max-w-screen-xl pb-12"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        >
        <Card className="px-4">
          <CardBody className="flex flex-col justify-center">
            <h1 className="text-lg font-bold py-2">Turma/Série</h1>
            <p>Especifique em que turma será aplicado o roteiro</p>
            <h1 className="text-lg font-bold py-2">Perfil da Turma</h1>
            <p>Utilize as ferramentas de diagnóstico para compreender melhor quem são seus estudantes e, assim, adequar as atividades propostas.</p>
            <h1 className="text-lg font-bold py-2">Duração do Projeto</h1>
            <p>Especifique o tempo de duração do projeto.</p>
            <h1 className="text-lg font-bold py-2">Tema</h1>
            <p>O tema deve ser de interesse dos jovens, de preferência escolhido com a colaboração deles.</p>
            <h1 className="text-lg font-bold py-2">Habilidades Específicas da BNCC</h1>
            <p>Escola quais habilidades trabalhar. Para cada uma delas, é necessário definir quais conteúdos conceituais, procedimentais e atitudinais serão desenvolvidos.</p>
            <h1 className="text-lg font-bold py-2">Atividades</h1>
            <p>Defina ações a serem desenvolvidas em cada aula para trabalhar os conteúdos previstos e alcançar os objetivos desejados. Ao planejar atividades descreva as estratégias para a aula, defina habilidades a serem trabalhadas, determine o conteúdo que será utilizado e como as habilidades serão desenvolvidas.</p>
          </CardBody>
        </Card>
        <Card className="px-4">
          <CardBody className="flex flex-col justify-center">
            <h1 className="text-lg font-bold py-2">Fator de Mobilização</h1>
            <p>O fator de mobilização é um desafio proposto aos estudantes com base em suas motivações e interesses. Cada capítulo do livro do estudante possui uma atividade ou desafio que deve ser elaborado e executado pelos estudantes em diferentes PPDAs.</p>
            <h1 className="text-lg font-bold py-2">Avaliação de Percurso e Resultados</h1>
            <p>A cada atividade ou bloco de atividades, programe-se e dedique um tempo específico para assegurar-se de que os objetivos do PPDA estão sendo atingidos.</p>
            <h1 className="text-lg font-bold py-2">Apresentação e Finalização</h1>
            <p>Com o PPDA estruturado, apresente-o a turma. Nesse momento, ele pode ser ajustado e finalizado com a ajuda dos jovens, para que se iniciem as atividades, conforme planejado.</p>
            <h1 className="text-lg font-bold py-2">Culminância</h1>
            <p>É o momento onde os resultados dos projetos são apresentados a um público a ser escolhido, que pode contemplar outros educadores, outras turmas, a comunidade do bairro, entre outros.</p>
          
          </CardBody>
        </Card>

      </motion.div>
    
    </>
  )
}

export default EtaPPDAFinal