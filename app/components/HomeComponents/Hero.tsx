import React from 'react'
import Button from '../commonComponents/Button'
import ButtonTouch from '../commonComponents/ButtonTouch'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
    
           <div className="w-full 
             bg-[url('/assests/HeroSection.svg')] min-h-screen    bg-no-repeat bg-cover  bg-center ">
       
       
   
    <div className="container mx-auto pl-4 pr-4 sm:pr-6 lg:pr-14 ">
    
    <div className="w-full mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[108px] pt-60 lg:pt-26 ">
      {/* content section */}
      <div className="mt-6 lg:mt-[39px] relative z-20 container">
        <div>
          <div className="font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[90px] text-white leading-[40px] sm:leading-[55px] md:leading-[70px] lg:leading-[89px] georgia-text">
            Smarter Signal,
          </div>
          <div className="font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[90px] text-[#8ED3FA] leading-[40px] sm:leading-[55px] md:leading-[70px] lg:leading-[89px] georgia-text">
            Seamless Connectivity.
          </div>
        </div>

        <div className="text-base sm:text-lg font-normal mt-4 sm:mt-[18px] text-white  lg:text-[#0E1412] lg:w-[618px]">
          Siggy is the AI-powered mobile app that transforms 
          how devices connect to cell towers—boosting signal reliability and optimizing telecom performance in real time.
        </div>

        <div className="mt-6 sm:mt-[33px] flex flex-wrap items-center gap-4 sm:gap-[15px]">
          <Button
            buttonText="Discover How It Works"
            className="px-[29px] py-[19px]"
          />   
          <ButtonTouch label="Get in Touch" className='lg:text-[#0E1412] font-normal text-white hover:opacity-80 hover:text-white hover:bg-[#0E1412] transition no-underline' />
        </div>
      </div>

      {/* mobile image section */}
      <div className="w-full flex justify-center items-center relative z-10">
             {/* Background Icon - Hidden on small screens */}
               
        <div className="w-full  flex justify-center items-center">
          {/* Phone Image */}
          <Image
             src="/assests/GroupMobile.png"
            alt="iPhone Mockup"
            width={363}
            height={515}
            className="w-full h-auto object-cover"
            priority
          />
               <Image
                      src="/images/group_3457411.png"
                      alt="Background Icon"
                      width={184}
                      height={148}
                      className="hidden sm:block absolute top-[-20px] left-8 lg:left-16 w-20 sm:w-24 lg:w-32 h-auto "
                    />
       
      
        </div>
      </div>
    </div>
    </div>
    </div>
     </section>
  )
}

export default Hero