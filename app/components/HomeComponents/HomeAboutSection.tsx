import React from 'react'
import Image from 'next/image'
import Button from '../commonComponents/Button'

const HomeAboutSection = () => {
  return (
    // About Section - Mobile responsive
    <div className="flex flex-col lg:flex-row justify-between items-center w-full  mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 gap-8 lg:gap-12">
      
      <div className="w-full lg:w-3/5 order-2 lg:order-1">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-sm sm:text-base lg:text-lg font-inter font-normal leading-relaxed text-white">
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

          <Button buttonText="Read Our Story" />
        </div>
      </div>

      <div className="w-full lg:w-2/5 order-1 lg:order-2">
        <Image
          src="/images/img_rectangle_60.png"
          alt="About Image"
          width={588}
          height={596}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
        />
      </div>
    </div>
  )
}

export default HomeAboutSection
