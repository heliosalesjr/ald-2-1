import React from 'react';

const AtiProfessores = () => {
  return (
    <div className="relative w-full">
      {/* Camada com gradiente e opacidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-focus opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/atividades_teacher.jpg')",
        }}
      ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 text-white text-center py-20 max-w-3xl mx-auto">
        <div className='border-white border-3 rounded-xl p-4'>
            <h1 className="text-4xl font-bold mb-4 pt-8 px-8">Diagnósticos para o Professor</h1>
            <p className="text-lg px-8 pb-8">
            Talvez você já conheça bem a sua turma. Mesmo assim, o diagnóstico aqui sugerido poderá trazer indicadores
            importantes para traçar o perfil dos estudantes com mais segurança.
            </p>
        </div>
        
      </div>
    </div>
  );
};

export default AtiProfessores;
