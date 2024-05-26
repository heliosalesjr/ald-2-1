import { motion } from "framer-motion";

function HeroBento() {
  return (
    <div className="flex h-[90vh] gap-4 max-w-7xl mx-auto px-4 pt-4">
      <div className="flex-1">
      <div className="pt-8 h-3/4 bg-blue-200 rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-6xl font-semibold text-slate-800 px-12">
          Aprendendo a Lidar com Dinheiro
        </h1>

        <p className="text-slate-950 p-12 lg:pr-16 ">
          Olá, professor e professora! Seja bem-vindo e bem-vinda ao site de apoio da coleção <strong>Aprendendo a Lidar com Dinheiro: Educação Financeira</strong>. Nesta seção, há informações sobre o que são os sites “Aprendendo a Lidar com Dinheiro” e como estão organizados, facilitando a navegação e consulta. Vamos conhecê-los?
        </p>
      </div>
        
        <div className="flex h-1/4 gap-4">
          <div className="w-2/3 bg-green-500 rounded-xl my-4" style={{backgroundImage: 'url(images/dinheirin2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-1/3 bg-primary rounded-xl my-4" style={{backgroundImage: 'url(images/trio.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>

      </div>
      <motion.div className="hidden md:block flex-1 relative mb-4 bg-primary-focus rounded-xl"
      
      initial={{ background: "orange" }}
      animate={{
        background: [
          "rgba(134, 188, 12, 1)",   // Tailwind CSS orange-700
          "rgba(2, 132, 199, 1)",   // Tailwind CSS sky-700
        ],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      
    >
        
        <div className="absolute inset-0 " style={{backgroundImage: 'url(images/maolivro2aserie.png)', backgroundSize: 'cover', backgroundPosition: 'top'}}></div>
      </motion.div>
    </div>
  )
}

export default HeroBento