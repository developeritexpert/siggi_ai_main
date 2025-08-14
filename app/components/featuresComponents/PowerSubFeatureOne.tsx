import React from "react";
import Image from "next/image";
import FeatureTextComponent from "./FeatureTextComponent";

const PowerSubFeatureOne = () => {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[79px] mt-[35px]">
      <div className="w-full md:w-1/2 max-w-[557px]">
        <h4 className="font-normal text-[18px] md:text-[40px]  ">Benefits</h4>
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
        className="w-full md:w-1/2 h-auto"
      />
    </div>
  );
};

export default PowerSubFeatureOne;
