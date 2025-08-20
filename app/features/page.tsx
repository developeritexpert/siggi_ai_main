import React from 'react'
import FeatureHero from '../components/featureAndBenefits/FeatureHero'
import PowerFeature from '../components/featureAndBenefits/PowerFeature'
import TestmonialSection from '../components/home/TestmonialSection'
import FAQSection from '../components/home/FAQSection'
const page = () => {
  return (
      <main className="bg-[#161b21] overflow-x-hidden">
          <FeatureHero/>
           <PowerFeature/>
         <TestmonialSection/>
         <FAQSection/>
        </main>
  )
}

export default page