'use client'

import IntroTabela from '../components/Introducao/IntroTabela'
import IntroButons from '../components/Introducao/IntroButons'
import IntroButtonNext from '../components/Introducao/IntroButtonNext'
import IntroHero from '../components/Introducao/IntroHero'
import { Divider } from '@nextui-org/react'


function Introcucao() {
  return (
    <>
        
        <IntroHero />
        <IntroTabela />
        <IntroButons  />
        <Divider className='max-w-5xl mx-auto my-8' />
        <IntroButtonNext />
        
    </>
    
  )
}

export default Introcucao