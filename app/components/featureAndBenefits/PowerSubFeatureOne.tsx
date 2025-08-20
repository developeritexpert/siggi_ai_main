import React from "react";
import Image from "next/image";
import FeatureTextComponent from "./FeatureTextComponent";

const PowerSubFeatureOne = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row-reverse lg:mx-auto lg:items-center gap-[30px] lg:gap-[79px] mt-[35px] lg:mt-[112px]  lg:max-w-[1307px]">
      <div className="w-full lg:w-1/2 lg:max-w-[584px]"  data-aos="fade-left">
        <h4 className="font-normal mb-[16px] text-[18px] lg:text-[40px] lg:mb-[14px]  ">Benefits</h4>
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
        src="/images/retangle_731.png"
        alt="power-feature-img"
        height={447}
        width={634}
        className="w-full lg:w-1/2 h-auto" data-aos="fade-right"
      />
    </div>
  );
};

export default PowerSubFeatureOne;
