import React from 'react'
import Image  from "next/image"
const CallSection = () => {
  return (
    
   <section className="relative w-full">
    <div className="hidden sm:w-[661px] sm:block absolute z-9 w-full xl:top-20 xl:right-0 ">
      <Image src="/images/group_3457011.png"  alt="Signal Tower"  width={96} height={140} className="w-full h-auto"/>
    </div>
  <div
  className="relative w-full 
             bg-[url('/images/img_xmlid106.png')] bg-cover bg-center bg-[#161b21] "
>
            {/* Signal Towers - Hidden on mobile for better performance */}
           
            <div className="container mx-auto py-[160px] px-4 "> 
            {/* <div className="hidden md:block  bottom-126 right-10 absolute lg:top-0 lg:right-10 xl:-top-[-100px] xl:right-[-29px] ">
              <div className="flex flex-row  items-center space-x-2 lg:space-x-5">
                <Image src="/assests/img_vector.svg" alt="Signal Tower" width={96} height={140} className="w-12 lg:w-16 xl:w-26 h-auto" />
                <Image src="/images/img_vector_white_a700.svg" alt="Signal Tower" width={56} height={136} className="w-8 lg:w-10 xl:w-13 h-auto" />
                <Image src="/images/img_vector_white_a700_140x134.svg" alt="Signal Tower" width={134} height={140} className="w-16 lg:w-20 xl:w-30 h-auto" />
                <Image src="/images/img_vector_white_a700_138x134.svg" alt="Signal Tower" width={134} height={138} className="w-16 lg:w-20 xl:w-30 h-auto" />
                <Image src="/images/img_vector_white_a700_136x140.svg" alt="Signal Tower" width={140} height={136} className="w-16 lg:w-20 xl:w-30 h-auto" />
              </div>
            </div> */}

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-[92px] items-center justify-center lg:max-w-[1287px] mx-auto ">
              <div className="w-full  ">
                <h2 className="text-2xl  georgia-text sm:text-2xl md:text-3xl lg:text-[65px]  font-normal leading-tight text-left text-white mb-3 sm:mb-4">
                  <span className="text-white">Never Drop a </span>
                  <p>
                     <span className="text-[#8ed3fa]">Call</span>
                  <span className="text-white"> Again</span>
                  </p>
               
                </h2>
                
                <div className="space-y-2 sm:space-y-4  sm:mb-2 xl:w-[556px] ">
                  <p className="text-base sm:text-lg  font-inter font-normal leading-relaxed text-white">
                    Traditional networks rely on outdated handoff methods that often result in weak signals and poor coverage.
                  </p>
                  <p className="text-sm sm:text-lg font-inter font-normal leading-relaxed text-white">
                    Siggy uses real-time AI algorithms to intelligently select the best tower for your device, ensuring crystal-clear calls, faster data speeds, and seamless connectivity—wherever you go.
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Real-time signal optimization',
                    'Improved connectivity indoors and outdoors', 
                    'AI-driven tower selection',
                    'Works across all major carriers'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image
                        src="/images/img_vector_blue_200.svg"
                        alt="Bullet Point"
                        width={14}
                        height={12}
                        className="w-3 sm:w-4 h-auto flex-shrink-0"
                      />
                      <p className="text-sm sm:text-base lg:text-lg font-inter font-normal text-white">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signal Visualization - Responsive */}
              <div className="w-full h-auto ">
                <Image
                  src="/images/img_rectangle_20.png"
                  alt="Signal Visualization"
                  width={634}
                  height={676}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
            </div>
       
         
        </div>
        </section> 
  )
}

export default CallSection