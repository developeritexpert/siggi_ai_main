import React from 'react'
import Image from "next/image"
const FeatureTextComponent = ({imageParaText,imageSpanText}) => {
  return (
       
                 <div className="flex flex-row gap-2 mb-[20px] items-baseline">
                  <Image src="/images/tick_features.png" width={14 } alt="tick-feature-img" height={13} className="w-[14px] h-[13px]"/>
                  <p className="text-[#8ED3FA] text-[14px] md:text-[18px]  font-semibold leading-[28px]">
                    {imageParaText}
                    <span className=" text-white font-normal">{imageSpanText}</span></p>
                 </div>
          
  )
}

export default FeatureTextComponent