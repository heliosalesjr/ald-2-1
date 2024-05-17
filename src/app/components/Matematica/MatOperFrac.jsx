import React from 'react'
import { TbPlayBasketball } from "react-icons/tb";
import { PiMathOperations } from "react-icons/pi";
import { CiBookmarkCheck } from "react-icons/ci";

function MatOperFrac() {
  return (
    <div className="max-w-7xl mx-auto px-4">
        <div className="p-4 mb-4">
            <h1 className="text-4xl font-bold text-slate-700 mb-4">Operações com frações e decimais</h1>
            <p className="text-slate-800">
            Na Primeira Etapa, serão abordadas as operações com números racionais na representação decimal. É conveniente trabalhar também, sempre que possível, os números racionais na representação fracionária.
            </p>
            <br></br>
            <p className="text-slate-800">
            Uma forma interessante de abordar esse assunto é organizar uma dinâmica em que os estudantes proponham questões envolvendo números decimais uns para os outros. Você poderá organizar essa atividade com os jovens dispostos em círculo, cada um fazendo uma pergunta para o colega a sua frente.
            </p>
        </div>

        <div className='container mx-auto py-8'>
                <div className="grid grid-cols-1 mx-auto max-w-5xl md:grid-cols-3">
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbPlayBasketball className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-700 text-left'>É fundamental que o estudante seja encorajado a estimar o resultado esperado do cálculo, fazendo operações aproximadas mentalmente, o que aos poucos aprimorará uma destreza importante para seu desenvolvimento pessoal. Fazer estimativas com justificativas é uma habilidade presente na BNCC (EF06MA11).
                        </p>
                    </div>

                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <PiMathOperations className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-700 text-left'>Ainda em relação às operações matemáticas, é importante revisitar o assunto com os estudantes, possibilitando a atribuição de significados, e não a simples memorização dos algoritmos.
                        </p>
                        <br></br>
                        <p className='text-sm text-slate-700 text-left'>
                        Na dinâmica com participação ativa dos jovens, é importante que, ao responder à pergunta do colega, cada um tenha a preocupação de justificar sua resposta. E você poderá verificar a eficácia do trabalho realizado.
                        </p>
                    </div>

                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <CiBookmarkCheck className="text-4xl text-primary mb-4" />
                        </div>
                       
                        <p className='text-sm text-slate-700 text-left'>As atividades do Capítulo 1 do Livro do Estudante estão disponíveis <a href="https://forms.gle/iWcViZZXCKynQNQU7" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800"> neste formulário </a>. Você poderá enviá-las aos estudantes e coletar as respostas de forma assíncrona a fim de avaliar o conhecimento dos jovens sobre operações com frações e decimais.

                        </p>
                        <br></br>
                        <p className='text-sm text-slate-700 text-left'>
                        Você também pode conferir <a href="https://drive.google.com/file/d/1T-Bh9KNk8wi5iw-SvzcTcv-38uuRpeaF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800">aqui</a> o conteúdo do livro Tópicos em Matemática sobre operações com números decimais e <a href="https://drive.google.com/file/d/1ydvl7SSfqJkzHkslB7g5XKBNxEmfx2YT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800">aqui</a> sobre operações com números fracionários.
                        </p>
                    </div>
        </div>
        
        </div>

    </div>
  )
}

export default MatOperFrac