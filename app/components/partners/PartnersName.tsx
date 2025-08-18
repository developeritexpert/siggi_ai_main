import React from 'react'
import Image from 'next/image'
const PartnersName = () => {
    const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo6.png",
  "/images/logo7.png",
  "/images/logo8.png",
  "/images/logo9.png",
  "/images/logo10.png",
  "/images/logo11.png",
  "/images/logo12.png",
];
  return (
     <section className="px-[20px] lg:px-[60px] py-[50px] lg:py-[100px] ">
        <div className="container mx-auto">
          <h1 className="font-normal text-[24px] lg:text-[65px] mx-auto text-white max-w-[636px] mb-[36px]">
            Some Of Our
             <span className="text-[#8ED3FA]"> Partners</span>
          </h1>
          <div>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {logos.map((logo,index)=>(
                    <div key={index} className="flex items-center justify-center rounded-[10px] border-[1px] border-[#FFFFFF1F] p-6 hover:scale-105 transition-transform duration-200">
                        <Image
                src={logo}
                alt={`logo-${index}`}
                width={120}
                height={40}
                className="object-contain"
              />
                    </div>
                ))}
             </div>
          
          </div>
        </div>
     </section>
  )
}

export default PartnersName