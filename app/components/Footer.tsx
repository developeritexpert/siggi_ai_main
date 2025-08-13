'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full  px-[16px] md:px-[60px] bg-cover bg-no-repeat bg-[#161b21] bg-center relative text-white mt-[-2px]"
      style={{ backgroundImage: "url('/images/img_mask_group.png')" }}
    >
      <div className="w-full container mx-auto px-4  pt-6 pb-6 md:pb-0">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mt-[10px] sm:mt-[213px] md:mt-[256px] lg:mt-[284px]">
          {/* Left Column */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[34%] gap-4 sm:gap-6">
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

            <p className="text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-6 sm:leading-7 lg:leading-[28px] text-left text-global-3 w-full -mt-1 sm:-mt-1.5 lg:-mt-[2px]">
              Siggy was founded to ensure connectivity is smart, seamless, and scalable. Our mission is to deliver reliable mobile experiences worldwide through intelligence and innovation.
            </p>

            <div className="flex flex-row gap-2 justify-start items-center w-auto mt-2 sm:mt-3 lg:mt-[14px]">
              <Image
                src="/images/img_group_34602.svg"
                alt="Facebook"
                width={44}
                height={44}
                className="w-[22px] sm:w-[33px] md:w-[38px] lg:w-[44px] h-[22px] sm:h-[33px] md:h-[38px] lg:h-[44px]"
              />
              <Image
                src="/images/img_group_34603.svg"
                alt="Twitter"
                width={44}
                height={44}
                className="w-[22px] sm:w-[33px] md:w-[38px] lg:w-[44px] h-[22px] sm:h-[33px] md:h-[38px] lg:h-[44px]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 pb-[25px] sm:gap-16 md:gap-20 lg:gap-[122px] justify-start items-start self-end w-full lg:w-[60%] mt-0 sm:mt-12 md:mt-16 lg:mt-[96px]">
            {/* Links Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-6 sm:gap-4">
              {/* Quick Links */}
              <div className="w-full sm:w-[48%]">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] georgia-text font-normal leading-6 sm:leading-7 lg:leading-[30px] text-global-3 mb-2 sm:mb-4">
                  Quick Links
                </h3>
                <div className="flex flex-col text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-8 sm:leading-9 lg:leading-[42px] text-left text-global-3 space-y-1">
                  <Link href="/#home" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Home</Link>
                  <Link href="/#how-it-works" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">How it works</Link>
                  <Link href="/#features" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Features & Benefits</Link>
                  <Link href="/#why-siggy" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Why Siggy?</Link>
                  <Link href="/#compliance-privacy" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Compliance & Privacy</Link>
                </div>
              </div>

              {/* Help & Support */}
              <div className="w-full sm:w-[48%]">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] georgia-text font-normal leading-6 sm:leading-7 lg:leading-[30px] text-global-3 mb-2 sm:mb-4">
                  Help & Support
                </h3>
                <div className="flex flex-col text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-8 sm:leading-9 lg:leading-[42px] text-left text-global-3 space-y-1">
                  <Link href="/#about" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">About Us</Link>
                  <Link href="/#contact" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Contact Us</Link>
                  <Link href="/#privacy-policy" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Privacy Policy</Link>
                  <Link href="/#terms" className="hover:text-blue-400 focus:text-blue-400 active:text-blue-500">Terms and Conditions</Link>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
       {/* Copyright */}
            <p className="text-sm container mx-auto py-[25px] px-[68px] mt-[95px] sm:text-base lg:text-[16px]  font-inter font-normal leading-4 sm:leading-5 lg:leading-[20px] text-center border-t-1 border-[#FFFFFF1A] w-auto">
              Copyright © 2025 Siggy. All Rights Reserv
            </p>
    </footer>
  );
};

export default Footer;
