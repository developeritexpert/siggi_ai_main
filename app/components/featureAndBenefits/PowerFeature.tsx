import React from 'react'
import Image from 'next/image'
import FeatureTextComponent from './FeatureTextComponent'
import PowerSubFeatureOne from './PowerSubFeatureOne'
import PowerSubFeatureSecond from './PowerSubFeatureSecond'
const PowerFeature = () => {
  return (
    <section className="px-[20px] py-[50px] lg:py-[100px] lg:px-[60px] text-white">
        <div className="container mx-auto">
        <h2 data-aos="zoom-in" className="w-full font-normal text-[24px]  md:text-[65px] md:leading-[75px] text-center max-w-[738px] mx-auto">
          
            Powerful <span className="text-[#8ED3FA]">Features. </span>
               Real Benefits.

       
        </h2>
           <PowerSubFeatureSecond/>
          <PowerSubFeatureOne/>
       
        </div>

    </section>
  )
}

export default PowerFeature