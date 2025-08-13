import React from 'react'
import Image from 'next/image'
const DownloadSection = () => {
       {/* Download Section - Mobile responsive */}
  return (
       
        <section className=" px-[20px] md:px-[60px] flex flex-col justify-start items-center w-full sm:pt-16 lg:pt-20 pb-6">
          <div className="container mx-auto flex flex-col justify-start items-center w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[65px] font-georgia font-normal leading-tight text-center text-white mb-4 sm:mb-6 max-w-4xl">
            <span className="text-white">Download </span>
            <span className="text-[#8ed3fa]">Siggy</span>
            <span className="text-white"> and Start Connecting Smarter</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-[20px] text-center font-inter font-normal leading-relaxed  text-white mb-8 sm:mb-12 max-w-4xl">
            Easy to set up, quick to improve your signal—get better connectivity from day one.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col items-center md:items-start sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
            {/* Apple Store */}
            <div className="flex items-center w-[172px] md:w-[239px] md:h-[90px] bg-white rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Image
                src="/images/img_apple_logo_black.svg"
                alt="Apple Logo"
                width={42}
                height={52}
                className="w-8 sm:w-10 h-10 sm:h-12 mr-3"
              />
              <div className="flex-1">
                <p className="text-xs sm:text-[16px] font-inter font-normal text-[#0e1412]">
                  Download on the
                </p>
                <p className="text-sm sm:text-base font-inter font-semibold text-[#0e1412]">
                  App Store
                </p>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center w-[172px] md:w-[239px] md:h-[90px]  bg-white rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Image
                src="/images/img_capa_1.svg"
                alt="Google Play Icon"
                width={40}
                height={46}
                className="w-8 sm:w-10 h-9 sm:h-11 mr-3"
              />
              <div className="flex-1">
                <p className="text-xs  sm:text-[16px] font-inter font-normal text-[#0e1412]">
                  Get it on
                </p>
                <p className="text-sm sm:text-base font-inter font-semibold text-[#0e1412]">
                  Google Play
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
  )
}

export default DownloadSection