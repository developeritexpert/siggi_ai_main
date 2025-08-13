import React from 'react'

const FeatureHero = () => {
  return (
      <section className="w-full px-[20px] pt-[226px] pb-[50px]  md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]    bg-no-repeat bg-cover  min-h-[1200px]">
             <div className="container mx-auto">
             <h1 className="text-[90px] leading-[89px] max-w-[665px] font-normal text-white">
                Packed with Power. Built for Everyone
             </h1>
             <p className="font-normal text-[18px] leading-[28px] max-w-[524px] mt-[18px]">
               Siggy combines advanced AI and real-time analytics to deliver seamless connectivity
             </p>
             </div>
             </section>
  )
}

export default FeatureHero