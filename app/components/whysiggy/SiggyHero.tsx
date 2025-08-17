import React from 'react'

const SiggyHero = () => {
  return (
      <section className="w-full pb-[149px] px-[20px] pt-[130px] md:pt-[226px] md:pb-[125px] 2xl:pb-[145px] 2xl:bg-bottom  md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]  bg-no-repeat bg-cover ">
             <div className="container mx-auto">
             <h1 className="text-[36px] leading-[40px]   max-w-[295px] md:text-[90px] md:leading-[89px] md:max-w-[705px] font-normal text-white">
               Why Your Signal Fails — And How We Fix It.
             </h1>
             <p className="font-normal leading-[24px] mt:[16px] text-[16px] md:text-[18px] md:leading-[28px] max-w-[524px] md:mt-[18px]">
              Traditional mobile networks are hindered by overloaded towers, environmental 
              obstructions, and rigid switching logic. Siggy replaces reactive systems with
               adaptive AI that dynamically adjusts to real-world conditions and future needs.
             </p>
             </div>
             </section>
  )
}

export default SiggyHero