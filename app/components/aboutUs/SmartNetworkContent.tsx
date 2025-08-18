import React from 'react'
import SmartNetworkText from './SmartNetworkText'

const SmartNetworkContent = ({heading,className}) => {
  return (
      <div className={`w-full  ${className}`}>
        <h4 className="font-normal text-white text-[18px] mb-[14px] lg:text-[40px] lg:mb-[14px]">
         {heading}
        </h4>
            <p className="text-white mb-[14px] lg:mb-[14px] text-[14px] lg:text-[16px] font-normal lg:leading-[24px] max-w-[517px]">
          To create a world where mobile connectivity is seamless, 
          intelligent, and universally reliable. We envision networks that adapt in real time, powered by AI that ensures every user, everywhere, stays connected to the strongest possible signal—without interruptions, delays, or complexity.
        </p>
        <div className="w-full flex flex-col">
                 <SmartNetworkText
          imageParaText="
          Seamless Connectivity Everywhere" />
             <SmartNetworkText 
          imageParaText="SAI-Driven Optimization" />
            <SmartNetworkText
            imageParaText="A Future-Proof Network Experience"
          />
               <SmartNetworkText
            imageParaText="Empowering Carriers and Enterprises"
          />
   
        </div>
      </div>
  )
}

export default SmartNetworkContent