import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
const OurMisssion = () => {
  return (
    <section className="py-[50px] lg:py-[100px] px-[20px] lg:px-[60px] text-white">
        <div className="container mx-auto">
          <div className="w-full flex flex-col lg:items-center lg:flex-row lg:gap-[93px] lg:max-w-[1288px] lg:mx-auto">
             <Image
              src="/images/ourMission.png"
              alt="our-mission-image"
              height={634}
              width={676}
             data-aos="flip-right" className="w-full lg:w-1/2"
            />
            <div className="w-full lg:w-1/2 mt-[20px] lg:mt-0" data-aos="fade-left">
              <h1 className="font-normal mb-[14px] lg:mb-[14px] text-[18px] lg:text-[65px] lg:leading-[75px]">
               Our Mission
              </h1>
              <p className="font-normal text-[14px] mb-[14px] lg:mb-[30px] lg:text-[18px] lg:leading-[28px]">
To deliver seamless, AI-driven mobile experiences by transforming how devices connect to networks. We believe connectivity should be adaptive, efficient, and intelligent—no matter 
where you are or what you do.
                
              </p>
              <p className="font-normal mb-[14px] lg:mb-[30px] text-[14px] lg:text-[18px] lg:leading-[28px]">
               We’re working with carriers, enterprises, and innovators around the world to reshape connectivity. Want to be part of the movement?

              </p>
            
             <Button className="bg-[#8ED3FA] py-[19px] px-[38px] lg:!w-fit text-[#0E1412]" buttonText="Become a Partner"/>

            
            </div>
           
          </div>
        </div>
      </section>
  )
}

export default OurMisssion