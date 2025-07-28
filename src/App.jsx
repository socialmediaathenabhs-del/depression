import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/Herosection'
import StatsSection from './Components/StatsSection'
import WhyChooseAthena from './Components/WhyChooseAthena'
import YourHealingPartners from './Components/YourHealingPartners'
import Depression from './Components/Depression'
import CausesOfDepression from './Components/CausesOfDepression'
import TreatmentsForDepression from './Components/TreatmentsForDepression'
import VisualStories from './Components/VisualStories'
import FAQSection from './Components/FAQSection'
import Footer from './Components/Footer'
// import FloatingButtons from './Components/FloatingButtons'

function App() {
 

  return (
    <>
    <HeroSection/>
    {/* <FloatingButtons/> */}
    <StatsSection/>
    <WhyChooseAthena/>
    <YourHealingPartners/>
    <Depression/>
    <CausesOfDepression/>
    <TreatmentsForDepression/>
    <VisualStories/>
    <FAQSection/>
    <Footer/>

    </>
  )
}

export default App
