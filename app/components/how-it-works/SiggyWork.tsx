import React from "react";
import SiggyImageText from "./SiggyImageText";
const SiggyWork = () => {
  return (
    <section
      className="px-[20px] lg:px-[60px] py-[50px] lg:py-[100px]
    bg-[url('/assests/XMLID_106_.png')]  bg-no-repeat bg-cover bg-bottom xl:pb-[275px]
    "
    >
      <div className="container mx-auto">
        <div data-aos="zoom-in">
          <h1 className="w-full text-[24px] font-normal md:text-[65px] text-white text-center">
            How Siggy <span className="text-[#8ED3FA] "> Works </span>
          </h1>

          <p className=" text-white text-center lg:max-w-[833px] font-normal text-[14px] lg:text-[18px] leading-[28px] mx-auto">
            Siggy is a smart, AI-powered mobile solution that helps you get the
            strongest and most reliable cell signal wherever you go. Here’s how
            it works:
          </p>
        </div>
        <div className="flex lg:flex-row lg:justify-between flex-col gap-[30px] lg:gap-0 mt-[83px] w-full">
          <div  data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="0">
          <SiggyImageText
            imageUrl="Group 1707479401.png"
         
            heading="Signal Monitoring"
            paraText="Siggy constantly monitors real-time signal strength, tower availability, and network conditions
                 in your area."
          />
          </div>
          <div  data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="300">
          <SiggyImageText
            imageUrl="Group 1707479400.png"
            heading="Smart Tower Selection"
            paraText="
Using advanced machine learning, it evaluates all available cell towers—not just the one your
phone defaults to—and connects you to the best-performing one."
          />
          </div>
            <div  data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="600">
          <SiggyImageText
               imageUrl="Group 1707479399.png"
            heading="Dynamic Optimization"
            paraText="As you move or conditions change,Siggy intelligently re-routes your connection to avoid
congestion, dead zones and dropped calls—without interrupting your service.
Personalized Performance"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiggyWork;
