import React from 'react'
import Image from 'next/image'
import FeatureTextComponent from './FeatureTextComponent'

const PowerSubFeatureSecond = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-[30px] md:gap-[79px] items-center  mt-[35px]">
         <div className="w-full md:w-1/2 max-w-[557px]">
             <h4 className="font-normal text-[18px] md:text-[40px] ">
                         Features
                          </h4>
          <div className="w-full flex flex-col">
      <FeatureTextComponent
 
  imageParaText="Predictive Tower Switching:"
  imageSpanText="Stay on the strongest, least congested signal"
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
          className="w-full md:w-1/2 h-auto"/>
        </div>
  )
}

export default PowerSubFeatureSecond;