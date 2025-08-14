import React from 'react'
import WhySiggyHero from '../components/WhySiggyComponents/WhySiggyHero'
import WhyChooseSiggiy from '../components/WhySiggyComponents/WhyChooseSiggiy'
import HomeAboutSection from '../components/HomeComponents/HomeAboutSection'
import ChallegesSolve from '../components/WhySiggyComponents/ChallegesSolve'
const page = () => {
  return (
  <main className="bg-[#161b21]">
      <WhySiggyHero/>
      <WhyChooseSiggiy/>
      <ChallegesSolve/>
       <HomeAboutSection />
        </main>
  )
}

export default page