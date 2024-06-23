import Image from 'next/image';
import backgroundImage from '/public/images/esc1.jpg'; // Ajuste o caminho da imagem conforme necessário

function EmpEscolas() {
  return (
    <div className="relative w-full h-[800px] max-w-7xl mx-auto">
      <div className="absolute inset-0">
        <Image 
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-1/2 bg-black bg-opacity-50 flex flex-col justify-center p-8">
          <h1 className="text-white underline decoration-primary text-2xl md:text-4xl mb-4 font-semibold pt-8 tracking-custom">
          Por que Empreendedorismo nas escolas?

          </h1>
          <p className="text-white py-2">
          A nova BNCC propõe “a educação integral dos estudantes com a construção de seu projeto de vida e de uma cultura favorável ao desenvolvimento de atitudes, capacidades e valores que promovam o Empreendedorismo (criatividade, inovação, organização, planejamento, responsabilidade, liderança, colaboração, visão de futuro, assunção de riscos, resiliência e curiosidade científica, entre outros), entendido como competência essencial ao desenvolvimento pessoal, à cidadania ativa, à inclusão social e à empregabilidade”.

          </p>
          <p className="text-white py-2">
          Os itinerários formativos da nova BNCC, organizados em torno de eixos estruturantes, permitem a apropriação de conteúdos que favoreçam o protagonismo juvenil, a capacidade de desenvolver pensamento crítico e consciente em um mundo em constante mudança. Neste programa, o Empreendedorismo combina as áreas de Matemática e Ciências Humanas e enseja o desenvolvimento das competências gerais.

          </p>
        </div>
        <div className="md:w-1/2"></div>
      </div>
    </div>
  );
}

export default EmpEscolas;
