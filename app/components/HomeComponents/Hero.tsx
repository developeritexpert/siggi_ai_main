import React from "react";
import Button from "../commonComponents/Button";
import ButtonTouch from "../commonComponents/ButtonTouch";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="w-full 
             bg-[url('/assests/HeroSection.svg')]    bg-no-repeat bg-cover  bg-center "
    >
      <div className="px-4">
      <div className="container mx-auto  ">
        <div className=" mx-auto flex flex-col lg:flex-row  pt-30 lg:pt-38 ">
          {/* content section */}
          <div className="w-[50%] mt-6 lg:mt-[39px]  ">
            
              <div className="font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[40px] xl:text-[50px] 2xl:text-[90px] text-white leading-[40px] sm:leading-[55px] md:leading-[70px]  lg:leading-[60px] 2xl:leading-[89px] georgia-text">
                Smarter Signal,
              </div>
              <span className="font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[40px] xl:text-[50px] 2xl:text-[90px] text-[#8ED3FA] leading-[40px] sm:leading-[55px] md:leading-[70px] lg:leading-[60px] 2xl:leading-[89px]  georgia-text">
                Seamless Connectivity.
              </span>
           

            <p className="text-base sm:text-lg font-normal mt-4 sm:mt-[18px] lg:[10px] xl:text-[20px] 2xl:text-base   text-white  lg:text-[#0E1412] lg:w-[460px] xl-w-[618px]">
              Siggy is the AI-powered mobile app that transforms how devices
              connect to cell towers—boosting signal reliability and optimizing
              telecom performance in real time.
            </p>

            <div className="mt-6 sm:mt-[33px] flex flex-wrap items-center gap-4 sm:gap-[15px]">
              <Button
                buttonText="Discover How It Works"
                className="px-[29px] py-[19px] xl:px-[29px] xl:py-[19px]  lg:px-[16px] lg:py-[16px]  "
              />
              <ButtonTouch
                label="Get in Touch"
                className="lg:text-[#0E1412] font-normal  hover:opacity-80 hover:text-white hover:bg-[#0E1412] transition no-underline "
              />
            </div>
          </div>

          {/* mobile image section */}
          {/* <div className="w-full flex justify-center items-center relative z-10"> */}
          {/* Background Icon - Hidden on small screens */}

          <div className="w-[50%] relative ">
            {/* Phone Image */}
            <Image
              src="/assests/GroupMobile.png"
              alt="iPhone Mockup"
              width={363}
              height={515}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-[-20px] right-[-800px] ">
            <Image
                      src="/images/group_3457411.png"
                      alt="Background Icon"
                      width={184}
                      height={148}
                      className="hidden sm:block  lg:left-16 w-20 sm:w-24 lg:w-40 h-auto "
                    />
          </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
