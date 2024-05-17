import React from 'react';

const MatGrandezas = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tl from-primary to-primary-focus sm:flex-row ">
           
            <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
                src="images/porcentagem.jpg"
                loading="lazy"
                alt="Photo by Helio Sales Jr."
                className="h-full w-full object-cover object-center"
            />
            </div>
            
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Recursos</h2>
    
            <p className="mb-8 max-w-md text-white">
            Você pode conferir {' '}
                <a href="https://drive.google.com/file/d/1gNL2TV3_c6JKto7SQ16nBmCh2lZ4nphQ/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='underline hover:text-sky-300'>
                    aqui
                </a>
            {' '}o conteúdo sobre <strong>Grandezas</strong> no livro Tópicos em Matemática.
            </p>
            
            <p className="mb-8 max-w-md text-white">
                Você pode conferir {' '}
                    <a href="https://drive.google.com/file/d/1XUH1DaWLHDVGp6c6TrcmTmrC6oy5DGua/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline hover:text-sky-300'>
                        aqui
                    </a>
                {' '}o conteúdo sobre <strong>Porcentagem</strong> no livro Tópicos em Matemática. 
            </p>
            
            </div>
            {/* content - end */}
        </div>
        </div>
    </div>
  

  );
};

export default MatGrandezas;
