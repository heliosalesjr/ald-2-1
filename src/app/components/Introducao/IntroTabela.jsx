import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


const rows = [
  {
    key: "1",
    name: "1. Consumo vs. Consumismo.",
    role: "1. Ter ou ser? Eis a questão... / 2. Jura que posso gastar mais? Juros!",
    status: "1. Definição de conteúdos. / 2. Diagnóstico. / 3. Plano Didático Ativo.",
    location: "Revisões de operações com números racionais. / Grandezas diretamente proporcionais. / Porcentagem. / Consumo e Consumismo. / Orçamento e taxas de juros. / Poupança, empréstimos e descontos.",
    department: "Ferramentas Google.",
  },
];

const columns = [
  {
    key: "name",
    label: "Parte do Quadro Geral",
  },
  {
    key: "role",
    label: "Capítulos do Livro do Estudante",
  },
  {
    key: "status",
    label: "Atividades do Projeto",
  },
  {
    key: "location",
    label: "Matemática e Educação Financeira",
  },
  {
    key: "department",
    label: "Recursos Didáticos",
  },
];

export default function IntroTabela() {
  return (

    <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="py-8">
        <h1 className="font-bold text-4xl text-slate-700 py-4 text-center">Site 1</h1>
        <p className="p-8 mb-4 text-center text-lg">Vamos ver quais Etapas do Projeto, temas de Matemática e ferramentas didáticas serão tratadas neste site:</p>
      
      <Table aria-label="Example table with dynamic content" style={{ fontSize: "1.2rem" }}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="font-bold text-medium text-white bg-primary">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell style={{ textAlign: "center" }}>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      


    
    </div>
  );
}
