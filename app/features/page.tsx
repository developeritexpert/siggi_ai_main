import React from 'react'
import FeatureHero from '../components/featuresComponents/FeatureHero'
import PowerFeature from '../components/featuresComponents/PowerFeature'
import TestmonialSection from '../components/HomeComponents/TestmonialSection'
import FAQSection from '../components/HomeComponents/FAQSection'
const page = () => {
  return (
      <main className="bg-[#161b21]">
          <FeatureHero/>
           <PowerFeature/>
         <TestmonialSection/>
         <FAQSection/>
        </main>
  )
}

export default page