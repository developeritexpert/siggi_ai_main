import React from 'react'
import Image from 'next/image'
const BuildForEverySection = () => {
  return (
     <div className=" flex flex-col justify-start items-center w-full lg:py-[126px] px-4 sm:px-6 lg:px-8">
          <h2 className="heading-h2 georgia-text">
            <span className="text-white">Built for Everyone Who Depends on Their </span>
            <span className="text-[#8ed3fa]">Signal</span>
          </h2>

          <div className='w-full relative'>
  <div 
  className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[750px] z-10
             bg-[url('/images/img_rectangle_21.png')] bg-contain bg-no-repeat  bg-center bg-[#161b21]"
>
            {/* Background Icon - Hidden on small screens */}
            <Image
              src="/images/group_3457411.png"
              alt="Background Icon"
              width={184}
              height={148}
              className="hidden sm:block absolute top-[-20px] left-8 lg:left-16 w-20 sm:w-24 lg:w-32 h-auto z-[-2]"
            />

         
          </div>
   <div className="absolute right-[155px] bottom-[-5px]">
              <div className="w-full max-w-[576px]">
                <div className="space-y-4 sm:space-y-6">
                  {/* User Types */}
                  {[
                    { icon: '/images/img_group_17.svg', title: 'Everyday Users', desc: 'Fewer dropped calls, better browsing.' },
                    { icon: '/images/img_group_15.svg', title: 'Travelers', desc: 'Stay connected on the move.' },
                    { icon: '/images/img_group_13_gray_900.svg', title: 'Remote Workers', desc: 'Reliable internet, anywhere.' },
                    { icon: '/images/img_group_34606.svg', title: 'Telecom Professionals', desc: 'Real-world data insights and diagnostics.' }
                  ].map((userType, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-[#ffffff07] border border-[#ffffff33] rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm hover:bg-[#ffffff10] transition-all duration-300">
                      <div className="bg-[#8ed3fa] rounded-full p-3 sm:p-4 flex-shrink-0">
                        <Image
                          src={userType.icon}
                          alt={`${userType.title} Icon`}
                          width={28}
                          height={28}
                          className="w-6 sm:w-7 h-6 sm:h-7"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl georgia-text font-normal text-white mb-1 sm:mb-2">
                          {userType.title}
                        </h3>
                        <p className="text-sm sm:text-base  font-normal text-white/80">
                          {userType.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
      
        </div>

  )
}

export default BuildForEverySection