import React from 'react'
import Image from 'next/image'
const ImageSpanText = ({imageParaText,imageSpanText}) => {
  return (
           <div className="flex flex-row gap-2  items-baseline">
                              <Image src="/images/tick_features.png" width={14 } alt="tick-feature-img" height={13} className="w-[14px] h-[13px]"/>
                              <p className="text-white text-[14px] lg:text-[18px]  font-normal lg:leading-[48px]">
                              <span className="font-semibold">{imageSpanText}</span>  {imageParaText}
                               </p>
                             </div>
  )
}

export default ImageSpanText