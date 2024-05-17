import React from 'react'
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { MdOutlineGroups} from 'react-icons/md'
import { FaPeopleGroup } from "react-icons/fa6";
function AtiCardsEstud() {
  return (
    <div className='container mx-auto max-w-7xl py-8'>
            <div className="grid grid-cols-1 mx-auto max-w-5xl md:grid-cols-3">
                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdOutlineSettingsSystemDaydream className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-700'>Sonhos pessoais
                    </h2>
                    <p className='text-sm text-slate-500 text-left'>Você pode dar ensejo para que eles sejam compartilhados, e isso poderá ser trabalhado em outros momentos, caso haja espaço no currículo escolar para o desenvolvimento do Projeto de Vida. Contudo, isso não se dará neste programa.
                    </p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdOutlineGroups className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-700'>Propostas coletivas de pequenos grupos
                    </h2>
                    <p className='text-sm text-slate-500 text-left'>Desejos e aspirações compartilhadas por um pequeno grupo de jovens. Um deles poderá vir a ser o Projeto Coletivo da turma, mas todos podem ser analisados e pensados quanto ao potencial.
                    </p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <FaPeopleGroup className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-700'>Propostas que possam se transformar num Projeto Coletivo
                    </h2>
                    <p className='text-sm text-slate-500 text-left'>Fazer uma análise de quais são viáveis segundo as condições da turma e o prazo de duração do programa e, em seguida, dentre as alternativas possíveis, aplicar a ferramenta da Eleição de prioridades <a href="https://drive.google.com/file/d/11Zbcy7SZy_Br6oi1IMTrBgMP_R3z74ND/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800">(acessível aqui)</a> para escolha do assunto.

                    </p>
                </div>
            </div>
    
    </div>
  )
}

export default AtiCardsEstud