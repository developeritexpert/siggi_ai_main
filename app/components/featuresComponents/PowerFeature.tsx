import React from 'react'
import Image from 'next/image'
import FeatureTextComponent from './FeatureTextComponent'
import PowerSubFeatureOne from './PowerSubFeatureOne'
import PowerSubFeatureSecond from './PowerSubFeatureSecond'
const PowerFeature = () => {
  return (
    <section className="py-[100px] px-[60px] text-white">
        <div className="container mx-auto">
        <h2 className="w-full font-normal text-[65px] leading-[75px] text-center max-w-[738px] mx-auto">
          
            Powerful <span className="text-[#8ED3FA]">Features. </span>
               Real Benefits.

       
        </h2>
          <PowerSubFeatureOne/>
          <PowerSubFeatureSecond/>
        </div>

    </section>
  )
}

export default PowerFeature