'use client'

import MatIntro from '../components/Matematica/MatIntro'

import MatSugestao from '../components/Matematica/MatSugestao'
import MatButton from '../components/Matematica/MatButton'
import MatPropriedades from '../components/Matematica/MatPropriedades'

import MatHero from '../components/Matematica/MatHero'
import Divider from '../components/Divider'
import MatContextualizando from '../components/Matematica/MatContextualizando'
import MatOperFrac from '../components/Matematica/MatOperFrac'
import MatInterpretacao from '../components/Matematica/MatInterpretacao'
import MatGrandezas from '../components/Matematica/MatGrandezas'


function Matematica() {
  return (
    <>
        
        <MatHero />
        <MatContextualizando />
        <MatIntro />
        
        <MatSugestao />
        <MatOperFrac />
        <MatGrandezas />
        <MatInterpretacao />
        <MatPropriedades />
        <Divider />
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica