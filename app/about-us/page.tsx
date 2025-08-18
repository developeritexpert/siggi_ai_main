import React from 'react'
import AboutHero from '../components/aboutUs/AboutHero'
import OurStory from '../components/aboutUs/OurStory'
import SingalMagic from '../components/home/SingalMagic'
import OurMisssion from '../components/aboutUs/OurMisssion'
import SignalUpgrade from '../components/home/SingalUbgrade'
import FAQSection from '../components/home/FAQSection'
import SmartNetwork from '../components/aboutUs/SmartNetwork'

const page = () => {
  return (
      <main className="bg-[#161b21]">
    <AboutHero/>
    <OurStory/>
       <SingalMagic />
       <OurMisssion/>
       <SmartNetwork/>
       <SignalUpgrade/>
       <FAQSection/>
       
    </main>
  )
}

export default page