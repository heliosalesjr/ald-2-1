'use client'
import CardList from "./components/CardList"
import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"

import SectionOne from "./components/SectionOne"
import FAQDaisy from './components/FAQDaisy'
import Divider from "./components/Divider"
import BaixeLivros from "./components/BaixeLivros"
import MainButton from "./components/MainButton"
import MainProposta from "./components/MainProposta"
import QueEmpreendedorismo from "./components/QueEmpreendedorismo"
import EmpEscolas from "./components/EmpEscolas"
import EmpRel from "./components/EmpRel"
import HeroBento from "./components/HeroBento"



export default function Home() {
  return (
    <>
      
      
      <HeroBento />
      <SectionOne />
      <Divider />
      <CardList />
      <Divider />
      <QueEmpreendedorismo />
      <EmpEscolas />
      <EmpRel />
      <FeatureSection />
      <FAQDaisy />
      <Divider />
      <BaixeLivros  />
      <MainProposta />
      <Divider />
      <MainButton />

    </>
  )
}
