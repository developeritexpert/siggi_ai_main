import React from "react";
import ChallengesSolveTextOne from "./ChallengesSolveTextOne";
import ChallengesSolveTextTwo from "./ChallengesSolveTextTwo";
const ChallegesSolve = () => {
  return (
    <section className="py-[50px] px-[20px] lg:py-[50px]  lg:px-[60px]">
      <div className="container mx-auto">
        <div className="w-full text-center ">
          <h1 className="w-full text-[24px] font-normal md:text-[65px] text-white text-center">
            Challenges We <span className="text-[#8ED3FA] "> Solve</span>
          </h1>

          <p className=" text-white lg:max-w-[833px] font-normal text-[14px] lg:text-[18px] leading-[28px] mx-auto">
            Traditional mobile networks are hindered by overloaded towers,
            environmental obstructions, and rigid switching logic. Siggy
            replaces reactive systems with adaptive AI that dynamically adjusts
            to real-world conditions and future needs.
          </p>
        </div>
    
          <div className="flex lg:flex-row flex-col w-full gap-[30px] lg:gap-0 mt-[43px] lg:items-center lg:max-w-[1274px] lg:mx-auto ">
            <div className="flex items-center  bg-[#161B21] border-[1px]  border-[#FFFFFF1F] w-full lg:w-1/2 rounded-lg">
              <ChallengesSolveTextOne heading={"Problem"} className="pl-[30px] py-[30px] lg:py-[50px]"/>
            </div>
            <div className="w-full lg:w-1/2 bg-[#1A222B] rounded-lg  flex lg:flex-row flex-col lg:items-center  ">
               < ChallengesSolveTextTwo heading={"Solution"} className="pl-[32px] pr-[11px] py-[30px] lg:py-[85px]" />
            </div>
          </div>
       
        </div>
  
    </section>
  );
};

export default ChallegesSolve;
