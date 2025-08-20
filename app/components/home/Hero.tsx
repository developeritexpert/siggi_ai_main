import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="w-full px-[20px] pt-[18px] pb-[50px]  md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]    bg-no-repeat bg-cover  bg-bottom "
    >
     
      <div className="w-full container mx-auto" >
        <div className="w-full flex flex-col  lg:flex-row  pt-[91px] lg:pt-[89px] xl:pt-38 2xl:h-[892px] ">
          {/* content section */}
          <div className="w-full lg:w-[50%] mt-6 lg:mt-[39px] " data-aos="fade-right">
          <h1 className="font-normal text-[36px] leading-[48px] max-w-[251px] lg:max-w-none  lg:text-[61px]  text-white lg:leading-[60px]   xl:text-[84px] xl:leading-[89px]  font-georgia 2xl:text-[90px]">
            Smarter Signal,
            <span className="text-[#8ED3FA] font-georgia"> Seamless Connectivity.</span>
          </h1>
           

            <p className="text-[16px] font-georgia  font-normal mt-4 md:mt-[18px]  md:text-[18px] text-[#0E1412]  lg:text-[#0E1412] lg:w-[470px] xl:w-[612px]">
              Siggy is the AI-powered mobile app that transforms how devices
              connect to cell towers—boosting signal reliability and optimizing
              telecom performance in real time.
            </p>

            <div className="mt-10 sm:mt-[33px] flex flex-wrap items-center gap-4 sm:gap-[15px]">
               <Link href="#/discover">
              <Button
                buttonText="Discover How It Works"
                className=" px-[29px] py-[19px] border-[1px] border-[#0E1412]  text-white bg-[#0E1412]  "
              />
             </Link>
           <Link href="/contact-us">
              <Button
                 buttonText="Get in Touch"
                className=" text-[#0E1412] px-[39px] py-[19px] border-[1px] border-[#0E1412]   hover:text-white hover:bg-[#0E1412]"
              />
              </Link>
            </div>
          </div>

     
          <div className="w-[90%] mt-[38px] md:w-[50%]  lg:relative 2xl:w-[674px] ">
            {/* Phone Image */}
            <Image
              src="/assests/GroupMobile.png"
              alt="iPhone Mockup"
              width={363}
              height={515}
              className="w-full  lg:relative lg:z-10 h-auto object-cover"
              priority
            />
            <div className="absolute hidden  lg:block xl:z-[1] bottom-[-20px] right-[-40px] lg:bottom-[-23px] lg:right-[-18px] xl:bottom-[-50px] xl:right-[-39px] 2xl:bottom-[-103px] ">
            <Image
                      src="/images/group_3457411.png"
                      alt="Background Icon"
                      width={184}
                      height={148}
                      className="hidden xl:z-[-1] sm:block w-20 sm:w-24  lg:w-30 xl:w-[194px] h-auto "
                    />
          </div>
          </div>
    
        </div>
      </div>
    
    </section>
  );
};

export default Hero;
