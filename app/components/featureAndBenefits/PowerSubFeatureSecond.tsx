import React from 'react'
import Image from 'next/image'
import FeatureTextComponent from './FeatureTextComponent'

const PowerSubFeatureSecond = () => {
  return (
    <div className="w-full flex flex-col lg:mx-auto lg:flex-row gap-[30px] lg:gap-[79px] items-center  mt-[35px] lg:max-w-[1307px]">
         <div className="w-full lg:w-1/2 lg:max-w-[584px]" data-aos="fade-right">
             <h4 className="font-normal mb-[16px] text-[18px] lg:text-[40px] lg:mb-[14px]">
                         Features
                          </h4>
          <div className="w-full flex flex-col">
      <FeatureTextComponent
 
  imageParaText="Predictive Tower Switching:"
  imageSpanText="Stay on the strongest , least congested signal"
/>
    <FeatureTextComponent

  imageParaText="Congestion Forecasting:"
  imageSpanText="AI anticipates network bottlenecks beforehand."
/>
    <FeatureTextComponent

  imageParaText="Seamless Dashboards:"
  imageSpanText="Real-time insights for engineers and decision-makers."
/>
    <FeatureTextComponent

  imageParaText="API Integration:"
  imageSpanText=" Easily embeds with carrier or enterprise systems."
/>
</div>
</div>
          <Image src="/images/rectangle_features1.png" alt="power-feature-img" height={447} width={634} 
          data-aos="fade-left" className="w-full lg:w-1/2 h-auto"/>
        </div>
  )
}

export default PowerSubFeatureSecond;