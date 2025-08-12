import React from "react";
import Button from "../commonComponents/Button";
import ButtonTouch from "../commonComponents/ButtonTouch";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="w-full px-[16px] py-[18px] pb-[20px]  lg:pb-[73px] xl:pb-[195px] md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]    bg-no-repeat bg-cover  bg-center "
    >
     
      <div className="w-full container mx-auto  ">
        <div className="w-full flex flex-col  md:flex-row  pt-[91px] lg:pt-38  ">
          {/* content section */}
          <div className="w-full md:w-[50%] mt-6 lg:mt-[39px] ">
          <h1 className="font-normal text-[36px] leading-[40px] max-w-[251px] md:max-w-none  md:text-[61px]  text-white  md:leading-[60px] xl:text-[84px] xl:leading-[89px]  font-georgia">
            Smarter Signal,
            <span className="text-[#8ED3FA] font-georgia"> Seamless Connectivity.</span>
          </h1>
           

            <p className="text-[16px] font-georgia  font-normal mt-4 md:mt-[18px]  md:text-[18px] text-[#0E1412]  lg:text-[#0E1412] lg:w-[470px] xl:w-[612px]">
              Siggy is the AI-powered mobile app that transforms how devices
              connect to cell towers—boosting signal reliability and optimizing
              telecom performance in real time.
            </p>

            <div className="mt-10 sm:mt-[33px] flex flex-wrap items-center gap-10 sm:gap-[15px]">
              <Button
                buttonText="Discover How It Works"
                className="text-[16px] text-white lg:text-[18px]  px-[29px] py-[19px] xl:px-[29px] xl:py-[19px]  lg:px-[16px] lg:py-[16px]  "
              />

           <Link href="#/contact">
              <ButtonTouch
                label="Get in Touch"
                className="text-[16px] text-[#0E1412]  lg:text-[18px]  px-[64px] py-[16px] xl:px-[29px] xl:py-[14px]  lg:px-[16px] lg:py-[14px]  lg:text-[#0E1412] font-normal  hover:opacity-80 hover:text-white hover:bg-[#0E1412] transition no-underline "
              />
              </Link>
            </div>
          </div>

          {/* mobile image section */}
          {/* <div className="w-full flex justify-center items-center relative z-10"> */}
          {/* Background Icon - Hidden on small screens */}

          <div className="w-[90%] mt-[38px] md:w-[50%]  lg:relative ">
            {/* Phone Image */}
            <Image
              src="/assests/GroupMobile.png"
              alt="iPhone Mockup"
              width={363}
              height={515}
              className="w-full  lg:relative lg:z-10 h-auto object-cover"
              priority
            />-
            <div className="absolute hidden  lg:block xl:z-[1] bottom-[-20px] right-[-40px] lg:bottom-[-23px] lg:right-[-18px] xl:bottom-[-50px] xl:right-[-52px] ">
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
    
    </section>
  );
};

export default Hero;
