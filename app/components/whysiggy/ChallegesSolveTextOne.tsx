import React from "react";
import ChallegesSolveTextSubText from "./ChallemgesSolveTextSubText";

const ChallegesSolveTextOne = ({heading,className}) => {
  return (
      <div className={`w-full  ${className}`}>
        <h4 className="font-normal text-white text-[18px] mb-[14px] lg:text-[40px] lg:mb-[14px]">
         {heading}
        </h4>
         <div className="w-full flex flex-col">
          <ChallegesSolveTextSubText imageParaText="High-traffic areas lead to slow speeds, dropped calls, and poor connectivity." />
          <ChallegesSolveTextSubText
            imageParaText="Static, rule-based systems fail to adapt to real-world conditions."
          />
          <ChallegesSolveTextSubText
            imageParaText="Buildings, terrain, and weather can weaken signal strength."
          />
          <ChallegesSolveTextSubText imageParaText="Carriers struggle with limited visibility into network performance. API Integration" />
        </div>
      </div>
  );
};

export default ChallegesSolveTextOne;
