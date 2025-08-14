import React from "react";
import FeatureTextComponent from "../featuresComponents/FeatureTextComponent";
import Image from "next/image";
const WhyChooseSiggiy = () => {
  return (
    <section className="px-[20px] py-[50px] md:py-[100px] md:px-[60px] text-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row-reverse md:justify-between items-center gap-[30px] md:gap-[79px] mt-[35px] md:mt-[112px]">
          <div className="w-full md:w-1/2 max-w-[584px]">
            <h2 className="w-full font-normal text-[24px]  md:text-[65px] md:leading-[75px] text-center max-w-[738px] mx-auto">
              <span className="text-[#8ED3FA]"> Why </span>
              Choose
              <span className="text-[#8ED3FA]"> Siggy?</span>
            </h2>
            <p className="text-[14px] md:text-[18px] font-normal leading-[28px]">
              Because mobile connectivity shouldn’t be unreliable, slow, or
              unpredictable. Siggy is built to solve the real-world challenges
              that traditional networks can’t.
            </p>
            <p className="text-[14px] md:text-[18px] font-normal leading-[28px]">
              Our AI-powered platform ensures devices always connect to the
              strongest tower, delivering faster speeds, fewer drops, and a
              seamless experience for users, carriers, and enterprises alike.
            </p>
            <div className="w-full flex flex-col">
              <FeatureTextComponent
                imageParaText="Consumers: "
                imageSpanText=" Fewer dropped calls, faster mobile data, stronger satisfaction."
              />
              <FeatureTextComponent
                imageParaText="Carriers:"
                imageSpanText="Better network utilization, reduced churn, richer analytics."
              />
              <FeatureTextComponent
                imageParaText="Enterprises:"
                imageSpanText="Optimized field connectivity for mission-critical use cases"
              />
            </div>
          </div>
          <Image
            src="/images/why_rectangle_siggy.png"
            alt="power-feature-img"
            height={447}
            width={634}
            className="w-full md:w-1/2 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSiggiy;
