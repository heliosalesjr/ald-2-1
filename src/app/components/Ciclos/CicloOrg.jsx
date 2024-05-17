'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Site 1",
    role: "Parte 1",
    status: "1, 2 e 3",
    atividades: "Aplicação de atividades diagnósticas, definição do tema do projeto e início do PDA.",
  },
  {
    key: "2",
    name: "Site 2",
    role: "Parte 2",
    status: "2 e 3",
    atividades: "Criação do Plano de Ação, manutenção do PDA e início das atividades planejadas.",
  },
  {
    key: "3",
    name: "Site 3",
    role: "Partes 3 e 4",
    status: "4 e 5",
    atividades: "Continuidade das ações planejadas, monitoramento e avaliação daquelas já executadas.",
  },
  {
    key: "4",
    name: "Site 4",
    role: "Parte 5",
    status: "5 e 6",
    atividades: "Avaliação o percurso. Planejamento e execução da culminância do projeto.",
  },
];

const columns = [
  {
    key: "name",
    label: "Nomenclatura dos Sites",
    className: "max-w-xs md:max-w-sm",
  },
  {
    key: "role",
    label: "Parte do Quadro Geral",
    className: "max-w-xs md:max-w-sm",
  },
  {
    key: "status",
    label: "Etapa do Ciclo de Projetos",
    className: "max-w-xs md:max-w-sm",
  },

  {key: "atividades",
  label: "Atividades do Projeto Coletivo a serem desenvolvidas",
  className: "max-w-xs md:max-w-sm",
  },
];

export default function CicloOrg() {
  return (

    <>
      <div className="container mx-auto max-w-screen-xl py-8">
        <h1 className="text-center pt-8 text-4xl font-semibold text-slate-700">Como este material está organizado dentro dos sites</h1>
        <p className="mt-4 p-4 text-gray-800 text-lg ">Para auxiliar na visualização da divisão das ações, criamos a tabela abaixo que organiza o conteúdo de cada site em relação às etapas do Ciclo de Projetos.</p>
      </div>
      <div className="flex justify-center">
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <Table aria-label="Nomenclatura dos Sites">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key} className="font-bold text-lg text-white bg-primary">
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell className={columnKey === "status" ? "w-2/3" : ""}>
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <p className="text-center text-lg mt-4 p-4 text-gray-800">
        Para conhecer melhor a divisão de atividades proposta pelo Caderno do Educador, você pode rever o Quadro Geral (
        <a
          href="https://docs.google.com/spreadsheets/d/1RLpcFXrQTB40T2DshPJklPjwE-2_EUsMcmw8w3VZX_c/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          disponível aqui
        </a>
        ).
      </p>

    </>
    
  );
}
