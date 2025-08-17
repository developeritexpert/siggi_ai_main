import React from 'react'

const FeatureHero = () => {
  return (
      <section className="w-full pb-[149px] px-[20px] pt-[130px] lg:pt-[226px] lg:pb-[178px] 2xl:pb-[201px] 2xl:bg-bottom  md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]  bg-no-repeat bg-cover ">
             <div className="container mx-auto">
             <h1 className="text-[36px] leading-[40px]   max-w-[295px] md:text-[90px] md:leading-[89px] md:max-w-[665px] font-normal text-white">
                Packed with Power. Built for Everyone
             </h1>
             <p className="font-normal leading-[27px] mt-[10px] text-[16px] md:text-[18px] md:leading-[28px] max-w-[461px] md:mt-[18px]">
               Siggy combines advanced AI and real-time analytics to deliver seamless connectivity
             </p>
             </div>
             </section>
  )
}

export default FeatureHero