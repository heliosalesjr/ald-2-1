import React from 'react'
import Link from 'next/link';

function MainButton() {
  return (
    <>
        <div className="flex items-center justify-center">
       
            <p className="p-6 text-center text-gray-700 text-lg">
            Prontos para conhecer o Ciclo de Projetos?</p>

            
        </div>
        <div className='flex items-center justify-center pb-8'>
            <Link href="/ciclos">
            <button className='btn btn-primary text-white'>Ciclo de Projetos</button>
            </Link>
        </div>
    
    </>
  )
}

export default MainButton