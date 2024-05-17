'use client'
import React from 'react'
import CicloHero from '../components/Ciclos/CicloHero'
import CiclosProj1 from '../components/Ciclos/CiclosProj1'
import CicloEd2 from '../components/Ciclos/CicloEd2'
import CiclosDica3 from '../components/Ciclos/CiclosDica3'
import CicloCl4 from '../components/Ciclos/CicloCl4'
import CiclosAtividades from '../components/Ciclos/CiclosAtividades'
import CicloOrg from '../components/Ciclos/CicloOrg'
import CiclosBtn from '../components/Ciclos/CiclosBtn'
import CiclosCiclos from '../components/Ciclos/CiclosCiclos'
import CiclosCrono from '../components/Ciclos/CiclosCrono'



function Ciclos() {
  return (
    <>
        <CicloHero />
        <CiclosCiclos />
        
        <CicloEd2 />
        <CiclosDica3 />
        <CicloCl4 />
        <CiclosCrono />
        
        <CicloOrg />
        <CiclosBtn />
    </>
  )
}

export default Ciclos