'use client'
import React from "react";
import { motion } from 'framer-motion'
import { FaRegLightbulb, FaRegSmile, FaGamepad } from "react-icons/fa"

function AtiFerramentas() {
  const ferramentas = [
    {
      title: "Realidade e desejo",
      icon: <FaRegLightbulb className="text-4xl text-blue-600" />,
      explicacao: "https://docs.google.com/document/d/1wS14avbhcJd8NbVVn_juK-7LvFMRjrd064cWvk_mrCw/edit",
      modelo: "https://docs.google.com/spreadsheets/d/1RnCXUPAmwuUf42tiWhn4H3DT5HTPWIkMHb35bbNyatA/edit#gid=2055273226",
    },
    {
      title: "Me agrada, me incomoda",
      icon: <FaRegSmile className="text-4xl text-green-600" />,
      explicacao: "https://docs.google.com/document/d/1OCgxyp9bb8KFvmIiu1oJrvypkbb2H20lbbZcsyK4boo/edit",
      modelo: "http://scrumblr.ca/meagradaincomoda",
    },
    {
      title: "Jogo de perguntas e respostas",
      icon: <FaGamepad className="text-4xl text-purple-600" />,
      explicacao: "https://docs.google.com/document/d/1_4X13GitDVF5mjbcyNHgyjoSAbOQgsitn_FtDohCyRo/edit?usp=sharing",
      modelo: "https://padlet.com/beieducacao1/jogo-de-perguntas-e-respostas-dqogz05rbon58e2d",
    },
  ]

  return (
    <>
      <div className='mx-auto max-w-screen-xl py-16'>
        <h2 className='font-bold text-4xl text-slate-700 py-4 text-center'>
          Ferramentas que podem ser utilizadas para fazer esse diagnóstico
        </h2>
        <p className="text-gray-800 text-center py-4 ">
          Criamos um link para cada uma das sugestões de ferramentas já com o modelo de aplicação com os estudantes. Clique em cada uma dessas ferramentas para conhecê-las e então aplicá-las com os estudantes por meio da plataforma Google:
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-screen-xl mx-auto pb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {ferramentas.map((ferramenta, idx) => (
          <motion.div 
            key={idx} 
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-slate-200 hover:border-blue-400"
            whileHover={{ y: -6 }}
          >
            <div className="mb-4">{ferramenta.icon}</div>
            <h3 className="text-lg font-semibold text-slate-700">{ferramenta.title}</h3>
            
            <div className="flex gap-3 pt-6">
              <a href={ferramenta.explicacao} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition">
                  Explicação
                </button>
              </a>
              <a href={ferramenta.modelo} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition">
                  Modelo
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default AtiFerramentas;