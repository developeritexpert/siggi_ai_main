import React from 'react'
import SiggyHero from '../components/whysiggy/SiggyHero'
import WhyChooseSiggy from '../components/whysiggy/WhyChooseSiggy'
import HomeAboutSection from '../components/home/HomeAboutSection'
import ChallengesSolve from '../components/whysiggy/ChallengesSolve'
const page = () => {
  return (
  <main className="bg-[#161b21]">
      <SiggyHero/>
      <WhyChooseSiggy/>
      <ChallengesSolve/>
       <HomeAboutSection />
        </main>
  )
}

export default page