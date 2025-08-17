import React from 'react'
import AboutHero from '../components/aboutUs/AboutHero'
import OurStory from '../components/aboutUs/OurStory'
import SingalMagic from '../components/home/SingalMagic'

const page = () => {
  return (
      <main className="bg-[#161b21]">
    <AboutHero/>
    <OurStory/>
       <SingalMagic />
    </main>
  )
}

export default page