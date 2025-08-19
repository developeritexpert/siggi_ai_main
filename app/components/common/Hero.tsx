import React from "react";
import Button from "./Button";
const Hero = ({heading,paraText,headingMaxWidth,paraMaxWidth,buttonText}) => {
  console.log("buttonTextValue",buttonText)
  return (
    <section
      className="w-full pb-[149px] px-[20px] pt-[130px] lg:pt-[226px] lg:pb-[178px] 2xl:pb-[203px] 2xl:bg-bottom  md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]  bg-no-repeat bg-cover "
    >
      <div className="container mx-auto">
        <h1 className={`text-[36px] leading-[40px]   lg:text-[90px] lg:leading-[89px]  font-normal text-white ${headingMaxWidth}`}>
        {heading}
        </h1>
        <p className={`font-normal text-[#0E1412] leading-[27px] mt-[10px] text-[16px] lg:text-[18px] lg:leading-[28px] md:mt-[18px] ${paraMaxWidth}`}>
        {paraText}
        </p>
        {buttonText.trim() !== "" &&
                <Button buttonText={buttonText} className="text-white px-[46px] py-[19px] bg-[#0E1412] mt-[30px]"/>

         }
      </div>
    </section>
  );
};

export default Hero;
