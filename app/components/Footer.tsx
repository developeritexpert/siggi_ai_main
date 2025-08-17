'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full pt-[50px] pb-[25px] lg:pt-[254px] xl:pt-[254px] 2xl:pt-[254px] lg:pb-[25px] px-[20px]   bg-cover md:px-[60px] bg-no-repeat bg-[#161b21] bg-bottom relative text-white mt-[-2px]"
      style={{ backgroundImage: "url('/images/img_mask_group.png')" }}
    
    >
      <div className="container mx-auto  ">
        <div className="flex flex-col lg:flex-row justify-between  gap-8 lg:mt-[62px] ">
          {/* Left Column */}
          <div className="flex flex-col  w-full lg:w-[50%] ">
            <Image
              src="/images/img_group_34593.svg"
              alt="Siggy Logo"
              width={110}
              height={24}
              className="w-[55px] sm:w-[82px] md:w-[96px] lg:w-[110px] h-auto"
            />

            <Image
              src="/images/img_group_34592.png"
              alt="App Preview"
              width={70}
              height={130}
              className="w-[35px] sm:w-[52px] md:w-[61px] lg:w-[70px] h-auto ml-4 sm:ml-6 md:ml-8 lg:ml-[20px] mt-2 sm:mt-3 md:mt-4 lg:mt-[16px]"
            />

            <p className="text-sm max-w-[448px] sm:text-base lg:text-[16px] font-inter font-normal leading-6 sm:leading-7 lg:leading-[28px] w-full ">
              Siggy was founded to ensure connectivity is smart, seamless, and scalable. Our mission is to deliver reliable mobile experiences worldwide through intelligence and innovation.
            </p>

            <div className="flex flex-row gap-4  items-center w-auto mt-2 sm:mt-3 lg:mt-[26px]">
              <Image
                src="/images/img_group_34602.svg"
                alt="Facebook"
                width={44}
                height={44}
                className="w-[45px] sm:w-[33px] md:w-[38px] lg:w-[44px] h-[51px] sm:h-[33px] md:h-[38px] lg:h-[44px]"
              />
              <Image
                src="/images/img_group_34603.svg"
                alt="Twitter"
                width={44}
                height={44}
                className="w-[45px] sm:w-[33px] md:w-[38px] lg:w-[44px] h-[51px] sm:h-[33px] md:h-[38px] lg:h-[44px]"
              />
            </div>
          </div>

          {/* Right Column */}
       
            {/* Links Section */}
            <div className=" pb-[25px] lg:w-[50%] mt-0  lg:mt-[96px] flex flex-col lg:flex-row justify-between  w-full gap-6  lg:gap-4">
              {/* Quick Links */}
              <div>
                <h2 className="text-base  lg:text-[26px] georgia-text font-normal leading-6   lg:leading-[30px]   mb-2 lg:mb-4">
                  Quick Links
                </h2>
                <div className="flex flex-col text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-8 sm:leading-9 lg:leading-[42px]  space-y-1">
                  <Link href="/#home" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Home</Link>
                  <Link href="/#how-it-works" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">How it works</Link>
                  <Link href="/#features" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Features & Benefits</Link>
                  <Link href="/#why-siggy" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Why Siggy?</Link>
                  <Link href="/#compliance-privacy" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Compliance & Privacy</Link>
                </div>
              </div>

              {/* Help & Support */}
              <div>
                <h2 className="text-lg lg:text-[26px] georgia-text font-normal leading-6 sm:leading-7 lg:leading-[30px]  mb-2 lg:mb-4">
                  Help & Support
                </h2>
                <div className="flex flex-col text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-8 sm:leading-9 lg:leading-[42px]  space-y-1">
                  <Link href="/#about" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">About Us</Link>
                  <Link href="/#contact" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Contact Us</Link>
                  <Link href="/#privacy-policy" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Privacy Policy</Link>
                  <Link href="/#terms" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Terms and Conditions</Link>
                </div>
              </div>
            </div>

           
      
        </div>
      </div>
       {/* Copyright */}
            <p className=" container mx-auto pt-[25px] lg:mt-[32px] lg:pt-[25px] px-[20px] lg:px-[60px]  lg:text-[16px]  font-inter font-normal leading-7  lg:leading-[26px] text-center border-t-1 border-[#FFFFFF1A] ">
              Copyright © 2025 Siggy. All Rights Reserve
            </p>
    </footer>
  );
};

export default Footer;
