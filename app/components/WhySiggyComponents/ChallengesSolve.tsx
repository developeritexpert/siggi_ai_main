import React from "react";
import ChallegesSolveTextOne from "./ChallegesSolveTextOne";
import ChallengesSolveTextTwo from "./ChallengesSolveTextTwo";
const ChallegesSolve = () => {
  return (
    <section className="py-[50px] md:py-[100px] px-[20px] md:px-[60px]">
      <div className="container mx-auto">
        <div className="w-full text-center ">
          <h1 className="w-full text-[24px] font-normal md:text-[65px] text-white text-center">
            Challenges We <span className="text-[#8ED3FA] "> Solve</span>
          </h1>

          <p className=" text-white max-w-[833px] font-normal text-[16px] md:text-[18px] leading-[28px] mx-auto">
            Traditional mobile networks are hindered by overloaded towers,
            environmental obstructions, and rigid switching logic. Siggy
            replaces reactive systems with adaptive AI that dynamically adjusts
            to real-world conditions and future needs.
          </p>
        </div>
    
          <div className="flex w-full mt-[43px] items-center ">
            <div className="md:max-w-[634px]  md:h-[382px] flex items-center  bg-[#161B21] border-[1px]  border-[#FFFFFF1F] w-1/2 rounded-lg">
              <ChallegesSolveTextOne heading={"Problem"} className="pl-[30px]"/>
            </div>
            <div className="w-1/2 bg-[#1A222B] rounded-lg md:h-[536px] flex items-center md:max-w-[634px] ">
               < ChallengesSolveTextTwo heading={"Solution"} className="pl-[32px] pr-[11px]" />
            </div>
          </div>
       
        </div>
  
    </section>
  );
};

export default ChallegesSolve;
