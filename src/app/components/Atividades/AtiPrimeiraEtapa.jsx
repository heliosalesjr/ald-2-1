'use client'
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';

function AtiPrimeiraEtapa() {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-8">
        <h1 className="font-bold text-4xl text-slate-700 py-4 text-center">
        A primeira etapa de aplicação do projeto
        </h1>
        <p className="mt-4 p-4 text-slate-800 text-lg">
        Alunos e professores possuem atividades a serem desenvolvidas. Vamos conhecê-las.
        </p>
      </div>

      <motion.div
        className="flex flex-col md:flex-row gap-4 mx-auto max-w-screen-xl pb-12"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Card className="px-4">
          <CardBody className="flex flex-col justify-center">
            <h1 className="text-xl font-bold py-2">Atividades a serem executadas pelo educador</h1>
            
            <img src="/images/atieducadore.jpg" alt="Ciclo de Projeto do Educador" className="mt-8 px-12 py-8" />
            <p>1 - Definição dos temas de Matemática a serem trabalhados.</p><br></br>
            <p>2 - Levantamento de diagnósticos da turma.</p><br></br>
            <p>3 - Início do Planejamento Didático Ativo.</p>
          </CardBody>
        </Card>
        <Card className="px-4">
          <CardBody className="flex flex-col justify-center">
            <h1 className="text-xl font-bold py-2">Atividades a serem executadas pelos estudantes</h1>
            <img src="/images/atiestudiante.jpg" alt="Ciclo do Projeto Coletivo" className="mt-4 px-8 py-16" />
            <p>
            1 - Definição do tema do Projeto Coletivo.
            </p>
            
            
          </CardBody>
        </Card>
      </motion.div>

    </>
  );
}

export default AtiPrimeiraEtapa;
