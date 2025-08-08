import React from 'react'
import Image from 'next/image'
const DownloadSection = () => {
       {/* Download Section - Mobile responsive */}
  return (
    
        <section className="flex flex-col justify-start items-center w-full pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 pb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-georgia font-normal leading-tight text-center text-white mb-4 sm:mb-6 max-w-4xl">
            <span className="text-white">Download </span>
            <span className="text-[#8ed3fa]">Siggy</span>
            <span className="text-white"> and Start Connecting Smarter</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg font-inter font-normal leading-relaxed text-center text-white mb-8 sm:mb-12 max-w-2xl">
            Easy to set up, quick to improve your signal—get better connectivity from day one.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
            {/* Apple Store */}
            <div className="flex items-center bg-white rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Image
                src="/images/img_apple_logo_black.svg"
                alt="Apple Logo"
                width={42}
                height={52}
                className="w-8 sm:w-10 h-10 sm:h-12 mr-3"
              />
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-inter font-normal text-[#0e1412]">
                  Download on the
                </p>
                <p className="text-sm sm:text-base font-inter font-semibold text-[#0e1412]">
                  App Store
                </p>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center bg-white rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Image
                src="/images/img_capa_1.svg"
                alt="Google Play Icon"
                width={40}
                height={46}
                className="w-8 sm:w-10 h-9 sm:h-11 mr-3"
              />
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-inter font-normal text-[#0e1412]">
                  Get it on
                </p>
                <p className="text-sm sm:text-base font-inter font-semibold text-[#0e1412]">
                  Google Play
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default DownloadSection