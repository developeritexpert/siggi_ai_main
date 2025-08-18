import React from "react";

const AboutHero = () => {
  return (
    <section
      className="w-full pb-[149px] px-[20px] pt-[130px] lg:pt-[226px] lg:pb-[178px] 2xl:pb-[201px] 2xl:bg-bottom  md:px-[60px]
             bg-[url('/assests/HeroSection.svg')]  bg-no-repeat bg-cover "
    >
      <div className="container mx-auto">
        <h1 className="text-[36px] leading-[40px]   max-w-[295px] lg:text-[90px] lg:leading-[89px] lg:max-w-[705px] font-normal text-white">
          The Team Behind the Signal Revolution{" "}
        </h1>
        <p className="font-normal leading-[27px] mt-[10px] text-[16px] lg:text-[18px] lg:leading-[28px] max-w-[524px] md:mt-[18px]">
          We’re building the intelligence that powers the future of mobile
          connectivity—reliable, real-time, and radically smarter.{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
