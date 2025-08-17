import React from "react";
import WhyTextComponent from "./WhyTextComponent";
import Image from "next/image";
const WhyChooseSiggiy = () => {
  return (
    <section className="px-[20px] py-[50px] lg:pt-[10px] lg:pb-[50px] lg:px-[60px] text-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-[30px] md:gap-[79px] mt-[35px] md:mt-[100px] lg:max-w-[1288px] lg:mx-auto">
          <div className="w-full lg:w-1/2 ">
            <h2 className="w-full font-normal text-[24px]  lg:text-[65px] lg:leading-[75px] mb-[20px] mx-auto">
               Why 
              Choose
              <span className="text-[#8ED3FA]"> Siggy?</span>
            </h2>
            <p className="text-[14px] lg:text-[18px] font-normal leading-[28px] max-w-[561px] mb-[20px]">
              Because mobile connectivity shouldn’t be unreliable, slow, or
              unpredictable. Siggy is built to solve the real-world challenges
              that traditional networks can’t.
            </p>
            <p className="text-[14px] lg:text-[18px] font-normal leading-[28px] max-w-[561px]">
              Our AI-powered platform ensures devices always connect to the
              strongest tower, delivering faster speeds, fewer drops, and a
              seamless experience for users, carriers, and enterprises alike.
            </p>
            <div className="w-full flex flex-col">
               <WhyTextComponent
                imageParaText="AI-Powered Tower Switching"
              />
             
              <WhyTextComponent
                imageParaText="Real-Time Optimization"
              />
              <WhyTextComponent
                imageParaText="Scalable & Future-Ready"
              />
              <WhyTextComponent
                imageParaText="Data-Driven Insights"
               />
            </div>
          </div>
          <Image
            src="/images/why_rectangle_siggy.png"
            alt="power-feature-img"
            height={447}
            width={634}
            className="w-full lg:w-1/2 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSiggiy;
