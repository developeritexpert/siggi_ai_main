import React from "react";
import ChallengesSolveTextOne from "../whysiggy/ChallengesSolveTextOne";
import ChallengesSolveTextTwo from "../whysiggy/ChallengesSolveTextTwo";
import Image from "next/image";
import SmartNetworkContent from "./SmartNetworkContent";
const SmartNetwork = () => {
  return (
    <section className="px-[20px] lg:px-[60px] py-[50px] lg:py-[100px] ">
      <div className="container mx-auto" >
        <div data-aos="zoom-in"  className="max-w-[1252px] text-white flex flex-col lg:flex-row justify-between items-center mx-auto">
          <h1 className="w-full lg:w-1/2 font-normal text-[24px] lg:text-[65px] lg:leading-[75px]">
            Vision for <span className="text-[#8ED3FA]">Smarter</span> Networks
          </h1>
          <p className="w-full lg:w-1/2 font-normal text-[14px] lg:text-[18px] lg:leading-[28px] max-w-[563px]">
            We aim to redefine mobile connectivity with AI-driven intelligence
            that adapts to every user, device, and environment. Our vision is to
            build networks that think ahead—predicting congestion, optimizing
            connections
          </p>
        </div>
      
          <div      className="flex lg:flex-row flex-col bg-[#1A222B]  lg:rounded-[35px] w-full gap-[30px] lg:gap-0 mt-[43px]  ">
            <div data-aos="fade-right" className="w-full  lg:w-1/2  flex lg:flex-row flex-col items-center  ">
              <SmartNetworkContent
                heading={"Our Vision"}
                className="py-[20px] pl-[20px] pr-[20px] lg:pl-[43px] lg:pr-[0px] lg:py-0 "
              />
            </div>

            <div data-aos="fade-left" className="w-full lg:w-1/2 ">
              <Image
                src="/images/smartNetwork.png"
                width={817}
                height={530}
                alt="smart-network"
                className="w-full rounded-[35px] lg:-w-1/2 lg:rounded-r-[35px] lg:rounded-l-[0px] "
              />
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default SmartNetwork;
