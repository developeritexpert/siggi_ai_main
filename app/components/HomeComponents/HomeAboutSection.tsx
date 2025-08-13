import React from 'react'
import Image from 'next/image'
import Button from '../commonComponents/Button'
import ButtonCustomize from '../commonComponents/ButtonCustomize'

const HomeAboutSection = () => {
  return (
    // About Section - Mobile responsive
    <section className="px-[10px] mb-[20px] md:pt-30 md:pb-10 md:px-16 ">
      <div className="container mx-auto pt-[20px]  md:mb-[0px] md:px-[0px]">
           {/* Connecting You Section */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className=" mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] georgia-text font-normal leading-tight text-white max-w-[813px] mx-auto">
                <span className="text-white">Connecting You to Whats</span>
                <span className="text-[#8ed3fa]"> Matters</span>
                <span className="text-white"> Most</span>
              </h2>
            </div>

            {/* Logo Circle */}
            <div className="hidden sm:block sm:-top-12 bg-[#90d5fc] rounded-full p-3 sm:p-4 lg:p-6 shadow-xl">
              <Image
                src="/images/img_siggy_logo_4.png"
                alt="Siggy Logo"
                width={148}
                height={146}
                className="w-12 sm:w-16 lg:w-20 xl:w-24 h-auto rounded-full"
              />
            </div>
          </div>
  
    <div className="flex flex-col lg:flex-row justify-between mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-4 gap-8 lg:gap-12">
      
      <div className="w-full lg:w-[50%] order-2 lg:order-1 mt-[20px]">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-sm sm:text-base lg:text-lg font-inter font-normal leading-relaxed text-white max-w-[534px]">
            <span className="block mb-4">
              Siggy was created with a simple goal: to make mobile signal stronger, smarter, and more reliable—no matter where you are.
            </span>

            <span className="block mb-4">
              Traditional network connections often struggle in real-world conditions. Whether it&apos;s dropped calls, slow downloads, or frustrating dead zones, poor signal can disrupt your day. Siggy solves this with real-time, AI-powered optimization that helps your phone connect to the best available tower—automatically.
            </span>

            <span className="block mb-4">
              Built for everyday users, remote workers, travelers, and telecom pros, Siggy empowers you to stay connected without the hassle. No extra hardware, no complicated setup—just intelligent signal performance from the palm of your hand.
            </span>

            <span className="block font-medium">
              We believe better connectivity should not be a luxury—it should be a given.
            </span>
          </p>

       <ButtonCustomize
                buttonText="Read Our Story"
                className="text-[12px] lg:text-[18px] bg-[#8ED3FA] text-[#0E1412] px-[10px] py-[16px] xl:px-[50px] xl:py-[19px]  lg:px-[16px] lg:py-[16px]  "
              />
        </div>
      </div>
     


      <div className="w-full lg:w-[50%] order-1 lg:order-2">
        <Image
          src="/images/img_rectangle_60.png"
          alt="About Image"
          width={588}
          height={596}
          className="w-full object-cover rounded-xl shadow-2xl"
        />
      </div>
    </div>
    </div>
      </section>
  )
}

export default HomeAboutSection
