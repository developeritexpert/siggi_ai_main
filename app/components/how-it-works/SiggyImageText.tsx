import React from 'react'
import Image from "next/image"
const SiggyImageText = ({paraText,imageUrl,heading}) => {
  return (
          <div className="flex flex-col justify-center gap-[16px] lg:gap-2  items-center">
                              <Image src={`/images/${imageUrl}`} width={442} alt={`${imageUrl}-img`} height={219} className="w-full h-auto"/>
                              <h2 className="text-white text-[18px] lg:text-[32px]  font-normal text-center">
                                     {heading}
                              </h2>
                              <p className="text-white text-[14px] lg:text-[16px]  font-normal lg:leading-[26px] max-w-[386px] text-center">
                                {paraText}
                               </p>
                             </div>
  )
}

export default SiggyImageText