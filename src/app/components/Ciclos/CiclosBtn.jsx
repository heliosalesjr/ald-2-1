
import React from 'react'
import Link from 'next/link';
import Divider from '../Divider'

function CiclosBtn() {
  return (
    <>
        <Divider />
        <div className="flex justify-center">
        
            <div className="p-4 ">
                <p className='text-slate-700 p-2 font-normal text-lg'>Vamos nos aprofundar nas ações a serem desenvolvidas nesta primeira etapa de aplicação do projeto?</p>
                <div className="flex justify-center py-4">
                  <Link href="/introducao">
                  <button className="btn btn-primary text-white">Introdução ao Site 1</button>
                  </Link>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default CiclosBtn