'use client'
import CardList from "./components/CardList"
import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"

import SectionHalf from "./components/SectionHalf"
import SectionOne from "./components/SectionOne"
import FAQDaisy from './components/FAQDaisy'
import Divider from "./components/Divider"
import BaixeLivros from "./components/BaixeLivros"
import MainButton from "./components/MainButton"
import MainProposta from "./components/MainProposta"



export default function Home() {
  return (
    <>
      
      <HeroSection />
      <SectionOne />
      <Divider />
      <CardList />
      <Divider />
      <SectionHalf />
      <Divider />
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
