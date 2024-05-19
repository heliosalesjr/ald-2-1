import Image from 'next/image';
import backgroundImage from '/public/images/atividades_teacher.jpg'; // Ajuste o caminho da imagem conforme necessário

function QueEmpreendedorismo() {
  return (
    <div className="relative w-full h-[800px]">
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
        <div className=" md:w-1/2"></div>
        <div className="w-full md:w-1/2 bg-black bg-opacity-50 flex flex-col justify-center p-8">
          <h1 className="text-white underline decoration-primary text-2xl md:text-4xl mb-4 font-semibold pt-8">O que é Empreendedorismo?
</h1>
          <p className="text-white py-2">Segundo o Sebrae, Empreendedorismo é “a capacidade que uma pessoa tem de identificar problemas e oportunidades, desenvolver soluções inovadoras e investir recursos na criação de algo positivo para a sociedade. Pode ser um negócio, um projeto ou mesmo um movimento que gere mudanças reais e impacto no cotidiano das pessoas”.
</p>
          <p className="text-white py-2">A ideia de empreender está associada, em geral, a pioneirismo e serviços e produtos inéditos. Mas empreendedorismo pode ser aplicado a grandes ou pequenos negócios e ONGs já existentes, introduzindo-se novas tecnologias ou ferramentas inovadoras. Ser um empreendedor vai muito além de ter o próprio negócio. É desenvolver a mentalidade de enxergar oportunidades, abraçar novas ideias e refletir sobre as novidades no mundo. Curiosidade, criatividade, resiliência, otimismo, empatia, confiança em si mesmo e responsabilidade social são características importantes para o empreendedor.
</p>
        </div>
      </div>
    </div>
  );
};

export default QueEmpreendedorismo;