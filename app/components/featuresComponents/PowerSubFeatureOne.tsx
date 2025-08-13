import React from 'react'
import Image from 'next/image'
import FeatureTextComponent from './FeatureTextComponent'

const PowerSubFeatureOne = () => {
  return (
    <div className="w-full flex flex-row-reverse gap-[79px] mt-[35px]">
         <div className="w-1/2 max-w-[557px]">
             <h4 className="font-normal text-[40px] ">
                         Features
                          </h4>
          <div className="w-full flex flex-col">
      <FeatureTextComponent
 
  imageParaText="Predictive Tower Switching:"
  imageSpanText="Stay on the strongest, least congested signal"
/>
    <FeatureTextComponent

  imageParaText="Predictive Tower Switching:"
  imageSpanText="Stay on the strongest, least congested signal"
/>
    <FeatureTextComponent

  imageParaText="Predictive Tower Switching:"
  imageSpanText="Stay on the strongest, least congested signal"
/>
    <FeatureTextComponent

  imageParaText="Predictive Tower Switching:"
  imageSpanText="Stay on the strongest, least congested signal"
/>
</div>
</div>
          <Image src="/images/rectangle_features1.png" alt="power-feature-img" height={447} width={634} 
          className="w-1/2 h-auto"/>
        </div>
  )
}

export default PowerSubFeatureOne