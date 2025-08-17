import React from 'react'
import SiggyHero from '../components/WhySiggyComponents/SiggyHero'
import WhyChooseSiggy from '../components/WhySiggyComponents/WhyChooseSiggy'
import HomeAboutSection from '../components/HomeComponents/HomeAboutSection'
import ChallegesSolve from '../components/WhySiggyComponents/ChallengesSolve'
const page = () => {
  return (
  <main className="bg-[#161b21]">
      <SiggyHero/>
      <WhyChooseSiggy/>
      <ChallegesSolve/>
       <HomeAboutSection />
        </main>
  )
}

export default page