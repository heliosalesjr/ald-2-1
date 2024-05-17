'use client'
import React from 'react'
import {BiAtom} from 'react-icons/bi';
import {SiCanva} from 'react-icons/si';
import {BsPencil} from 'react-icons/bs';
import {AiOutlineAreaChart} from 'react-icons/ai';

function RecSugestao() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
            
            <h2 className="mb-6 text-3xl font-bold py-8">
            Dicas e sugestões de sites para a criação de mapa conceitual e mapa mental
            
            </h2>
            <p className="mb-12 text-neutral-700 dark:text-neutral-300">
            Aqui disponibilizamos algumas ferramentas digitais para te ajudar, mas lembrando que você pode ensinar os alunos a criar seus mapas mentais à mão. Veja como neste vídeo <a href="https://surprise.ly/v/?IZVf0ugVZqA:IZVf0ugVZqA:86:86:474:474:0:0:0:100" target="_blank" className="text-blue-500 underline hover:text-blue-700">aqui</a>.
            </p>

    
          </div>

          <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                    <a href="http://mindmeister.com" target="_blank" rel="noopener noreferrer">
                      <BiAtom className="h-6 w-6 text-gray-600" />
                    </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">MindMeister</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    Facilita a criação de mapas mentais. Possui um editor intuitivo que permite mapear ideias junto com sua equipe, de forma rápida e atrativa. Você pode acessar um tutorial em vídeo <a href="https://youtu.be/GbpDGemgFY4" target="_blank" className="text-blue-500 underline hover:text-blue-700">aqui</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                      <a href="http://canva.com" target="_blank" rel="noopener noreferrer">
                        <SiCanva className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Canva</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    É uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais. Está disponível online e em dispositivos móveis e integra milhões de imagens, fontes, modelos e ilustrações. Você pode conferir um tutorial em vídeo <a href="https://www.youtube.com/watch?v=3SgVQZWUWHM" target="_blank" className="text-blue-500 underline hover:text-blue-700">aqui</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                      <a href="http://www.creately.com" target="_blank" rel="noopener noreferrer">
                        <BsPencil className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Creately</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    Software com várias funcionalidades que o ajudam a criar um mapa conceitual de forma simples, inovadora e rápida. Tem uma biblioteca abrangente com vários modelos de mapas e diversas opções de personalização. Você pode acessar a um tutorial em vídeo <a href="https://youtu.be/tEPGujCFSys?t=61" target="_blank" className="text-blue-500 underline hover:text-blue-700">aqui</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                      <a href="http://www.lucidchart.com" target="_blank" rel="noopener noreferrer">
                        <AiOutlineAreaChart className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Lucidchart</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    É um espaço de trabalho visual que mescla diagramação, visualização de dados e colaboração para acelerar a compreensão e promover a inovação. Você pode assistir a um tutorial em vídeo <a href="https://youtu.be/ILlPjxaT5u0" target="_blank" className="text-blue-500 underline hover:text-blue-700">aqui</a>.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecSugestao