import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function RecInfografico() {
  return (
    <>
        <section className="mx-auto">
            <div className='flex justify-center items-center'>
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className=" text-gray-700 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700 dark:text-white">
                    Infográfico
                    </h2>
                    <p className="mb-4">
                    Infográfico é um tipo de linguagem que associa elementos verbais (frases curtas) a elementos não verbais (imagens, sons, gráficos etc.). Sua principal função é informar o leitor de maneira simples, rápida e objetiva. Na elaboração de um infográfico, é importante prestar atenção à consonância entre os elementos verbais e não verbais, ou seja, texto, imagens e demais elementos devem se referir sempre ao mesmo assunto. Abaixo você confere um exemplo de infográfico retirado  
                    <a href="https://bloglogistica.com.br/mercado/infografico-dia-mundial-da-agua/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700"> deste link</a>.
                    </p>

                </div>
                <div className="lg:col-span-1 lg:justify-self-center lg:items-center mt-8">
                    <img className="w-full rounded-lg max-w-[300px]" src="images/info1.png" alt="office content 1" />
                </div>
            </div>

            </div>
        
            
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
            <Accordion variant='bordered'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Sugestão de atividade">
                
                        <p className="mb-4">
                        A parte 2 do Livro do Estudante aborda diretamente um tema econômico ao falar sobre hábitos de consumo cotidianos (ir ao mercado, por exemplo). Nossa sugestão é que os estudantes construam um infográfico com dicas para economizar nas compras.
                        </p>
                        <p className="mb-4">
                        Após a construção desse infográfico, apresente-o para sua turma. Caso julgue necessário, revisite os capítulos 2 e 3 do livro.
                        </p>
                        <p className="mb-4">
                        O objetivo desta atividade é estimular nos estudantes a criatividade, a capacidade de articular elementos verbais e não verbais, o trabalho em grupo, a argumentação etc. Desse modo, foi solicitado que os estudantes criassem em duplas um infográfico com dicas para economizar nas compras de supermercado.
                        </p>
                        <p className="mb-4">
                        Atenção: Antes que os estudantes iniciem a atividade, certifique- se de que eles entenderam a estrutura de um infográfico. Chame a atenção para o fato de que eles devem sistematizar as dicas com frases curtas, imagens etc.
                        </p>
                        <p className="mb-4">
                        Os infográficos podem ser criados em sites específicos. Se você não tiver acesso à internet, pode fazer o infográfico usando lápis e papel.
                        </p>
                </AccordionItem>
                
            </Accordion>
            
                
                </div>
        </section>
        <div className="max-w-screen-lg mx-auto  pb-8 sm:pb-8 lg:pb-12">
            
            <div className="relative flex flex-wrap bg-primary rounded-lg px-4 py-6 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                <p className='font-bold'>
                Você pode conferir mais exemplos aqui:{' '}
                    <a
                        href="https://porque.com.br/categoria/infograficos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-blue-100"
                    >
                        Infográficos | Por Quê?
                    </a>
                </p>
                </div>

               
            
                
            </div>
            
            </div>
    </>
  )
}

export default RecInfografico