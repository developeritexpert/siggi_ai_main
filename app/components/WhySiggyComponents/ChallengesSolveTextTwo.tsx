import React from "react";
import ChallegesSolveTextSubText from "./ChallemgesSolveTextSubText";

const ChallengesSolveTextTwo = ({heading,className}) => {
  return (
      <div className={`w-full  ${className}`}>
        <h4 className="font-normal text-white text-[18px] mb-[14px] lg:text-[40px] lg:mb-[14px]">
         {heading}
        </h4>
        <div className="w-full flex flex-col">
                 <ChallegesSolveTextSubText 
          imageParaText="
          Siggy’s predictive AI forecasts congestion and switches users to the best-performing tower before issues occur." />
          <ChallegesSolveTextSubText 
          imageParaText="Siggy uses reinforcement learning to dynamically choose the optimal tower in real time.
" />
          <ChallegesSolveTextSubText
            imageParaText="Our AI continuously evaluates live telemetry to maintain the strongest connection possible."
          />
          <ChallegesSolveTextSubText
            imageParaText="Siggy provides real-time dashboards and analytics for smarter capacity planning and troubleshooting."
          />
   
        </div>
      </div>
  );
};

export default ChallengesSolveTextTwo;
