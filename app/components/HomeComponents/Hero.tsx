import React from "react";
import Button from "../commonComponents/Button";
import ButtonTouch from "../commonComponents/ButtonTouch";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="w-full pb-[40px]  lg:pb-[73px] xl:pb-[4px] 2xl:pb-[53px]
             bg-[url('/assests/HeroSection.svg')]    bg-no-repeat bg-cover  bg-center "
    >
      <div className="px-4">
      <div className="container mx-auto  ">
        <div className=" mx-auto flex flex-col gap-[50px] lg:gap-[140px] lg:flex-row  pt-[51px] lg:pt-38 ">
          {/* content section */}
          <div className="w-full lg:w-[41%]  xl:w-[80%] mt-6 lg:mt-[39px]  ">
          <h1 className="font-normal text-[20px] leading-[30px] sm:text-[48px] md:text-[60px] lg:text-[40px] xl:text-[50px] 2xl:text-[90px] text-white sm:leading-[55px] md:leading-[70px] lg:leading-[60px] 2xl:leading-[89px] georgia-text">
            Smarter Signal,
            <span className="text-[#8ED3FA]"> Seamless Connectivity.</span>
          </h1>
           

            <p className="text-[12px] sm:text-lg font-normal mt-4 sm:mt-[18px] lg:[10px] xl:text-[20px] 2xl:text-base   text-white  lg:text-[#0E1412] lg:w-[460px] xl-w-[618px]">
              Siggy is the AI-powered mobile app that transforms how devices
              connect to cell towers—boosting signal reliability and optimizing
              telecom performance in real time.
            </p>

            <div className="mt-6 sm:mt-[33px] flex flex-wrap items-center gap-4 sm:gap-[15px]">
              <Button
                buttonText="Discover How It Works"
                className="text-[12px] text-white px-[10px] py-[16px] xl:px-[29px] xl:py-[19px]  lg:px-[16px] lg:py-[16px]  "
              />
              <ButtonTouch
                label="Get in Touch"
                className="text-[12px] px-[10px] py-[10px] lg:text-[#0E1412] font-normal  hover:opacity-80 hover:text-white hover:bg-[#0E1412] transition no-underline "
              />
            </div>
          </div>

          {/* mobile image section */}
          {/* <div className="w-full flex justify-center items-center relative z-10"> */}
          {/* Background Icon - Hidden on small screens */}

          <div className="w-[82%]  sm:w-[82%]  lg:w-[40%]  xl:w-[91%]  text-center  lg:relative ">
            {/* Phone Image */}
            <Image
              src="/assests/GroupMobile.png"
              alt="iPhone Mockup"
              width={363}
              height={515}
              className="w-full sm:w-[50%] lg:w-[94%]  xl:w-[95%] lg:relative lg:z-10 h-auto object-cover"
              priority
            />-
            <div className="absolute hidden  lg:block xl:z-[1] bottom-[-20px] right-[-40px] lg:bottom-[-23px] lg:right-[-18px] xl:bottom-[-50px] xl:right-[-36px] ">
            <Image
                      src="/images/group_3457411.png"
                      alt="Background Icon"
                      width={184}
                      height={148}
                      className="hidden xl:z-[-1] sm:block w-20 sm:w-24  lg:w-30 xl:w-[194px] h-auto "
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
