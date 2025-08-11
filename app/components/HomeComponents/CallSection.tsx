import React from 'react'
import Image  from "next/image"
const CallSection = () => {
  return (
    <div className="relative xl:block">
        <div className="hidden xl:block bottom-126 right-10 absolute lg:top-[89px] xl:w-[641px] z-10 lg:right-10 xl:top-[70px] xl:right-[50px] overflow-hidden">

      <Image src="/images/group_3457011.png" alt="Signal Tower" width={96} height={140} className="w-12 lg:w-16 xl:w-[641px] h-auto" />
</div>
    <section className="flex flex-col items-center w-full pt-8 sm:pt-12 lg:pt-[160px]">
    
  <div 
  className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[929px] -mt-8 sm:-mt-12 lg:-mt-16 
             bg-[url('/images/img_xmlid106.png')] bg-cover bg-center bg-[#161b21]"
>
            {/* Signal Towers - Hidden on mobile for better performance */}
          <div className="hidden md:block lg:block xl:hidden  bottom-126 right-10 absolute lg:top-16 lg:right-10 xl:-top-5 xl:right-40 overflow-hidden">
              <div className="flex flex-row  items-center space-x-2 lg:space-x-4">
                <Image src="/assests/img_vector.svg" alt="Signal Tower" width={96} height={140} className="w-12 lg:w-16 xl:w-20 h-auto" />
                <Image src="/images/img_vector_white_a700.svg" alt="Signal Tower" width={56} height={136} className="w-8 lg:w-10 xl:w-12 h-auto" />
                <Image src="/images/img_vector_white_a700_140x134.svg" alt="Signal Tower" width={134} height={140} className="w-16 lg:w-20 xl:w-24 h-auto" />
                <Image src="/images/img_vector_white_a700_138x134.svg" alt="Signal Tower" width={134} height={138} className="w-16 lg:w-20 xl:w-24 h-auto" />
                <Image src="/images/img_vector_white_a700_136x140.svg" alt="Signal Tower" width={140} height={136} className="w-16 lg:w-20 xl:w-24 h-auto" />
              </div>
            </div>


            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1287px] mx-auto  md:gap-[92px] px-4 sm:px-6 lg:px-26 py-8 sm:py-12 lg:pt-25 lg:pb-16">
              <div className="w-full lg:w-[60%] max-w-2xl ">
                <h2 className="text-2xl  georgia-text sm:text-2xl md:text-3xl lg:text-[45px]  font-normal leading-tight text-left text-white mb-3 sm:mb-4">
                  <span className="text-white">Never Drop a </span>
                  <p>
                     <span className="text-[#8ed3fa]">Call</span>
                  <span className="text-white"> Again</span>
                  </p>
               
                </h2>
                
                <div className="space-y-2 sm:space-y-4 mb- sm:mb-2">
                  <p className="text-sm sm:text-base  font-inter font-normal leading-relaxed text-white">
                    Traditional networks rely on outdated handoff methods that often result in weak signals and poor coverage.
                  </p>
                  <p className="text-sm sm:text-base font-inter font-normal leading-relaxed text-white">
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
              <div className="w-full lg:w-[58%] flex justify-center mt-8 lg:mt-0">
                <Image
                  src="/images/img_rectangle_20.png"
                  alt="Signal Visualization"
                  width={634}
                  height={676}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        </div>
  )
}

export default CallSection