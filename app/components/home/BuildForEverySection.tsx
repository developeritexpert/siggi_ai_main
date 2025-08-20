import React from "react";
import Image from "next/image";
const BuildForEverySection = () => {
  return (
    <section className=" py-[50px]  lg:py-[100px] w-full l px-[20px] lg:px-[60px]">
      <div className="container mx-auto flex flex-col justify-center items-center w-full">
        <h2
          className="max-w-[953px] heading-h2 georgia-text"
          data-aos="zoom-in"
        >
          <span className="text-white ">
            Built for Everyone Who Depends on Their{" "}
          </span>
          <span className="text-[#8ed3fa]">Signal</span>
        </h2>

        <div className="w-full relative z-10">
          {/* Background Icon - Hidden on small screens */}
          <Image
            src="/images/group_3457411.png"
            alt="Background Icon"
            width={184}
            height={148}
            className="hidden sm:block absolute top-[-43px] left-[-28px] lg:top-[-47px] lg:left-[-34px] w-20 sm:w-24 lg:w-[185px] h-auto z-8 "
          />
          <div
            className="w-full rounded-[35px] flex justify-end items-end max-h-[400px] sm:max-h-[500px] lg:max-h-[750px] overflow-y-hidden
            relative  z-9 bg-[url('/images/img_rectangle_21.png')] pt-6 pr-[0px] md:pr-[73px] bg-no-repeat bg-cover  bg-center bg-[#161b21]"
          >
            <div className="w-full  max-w-[576px] max-h-[400px] sm:max-h-[500px] lg:max-h-[750px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8ed3fa]/50  no-scrollbar scrollbar-track-transparent pl-2 md:pl-0 pr-2">
              <div className="space-y-4 sm:space-y-6 pt-10 pb-1 mt-[243px]">
                {/* User Types */}
                {[
                  {
                    icon: "/images/img_group_17.svg",
                    title: "Everyday Users",
                    desc: "Fewer dropped calls, better browsing.",
                  },
                  {
                    icon: "/images/img_group_15.svg",
                    title: "Travelers",
                    desc: "Stay connected on the move.",
                  },
                  {
                    icon: "/images/img_group_13_gray_900.svg",
                    title: "Remote Workers",
                    desc: "Reliable internet, anywhere.",
                  },
                  {
                    icon: "/images/img_group_34606.svg",
                    title: "Telecom Professionals",
                    desc: "Real-world data insights and diagnostics.",
                  },

                  {
                    icon: "/images/img_group_15.svg",
                    title: "Travelers",
                    desc: "Stay connected on the move.",
                  },
                  {
                    icon: "/images/img_group_17.svg",
                    title: "Everyday Users",
                    desc: "Fewer dropped calls, better browsing.",
                  },
                ].map((userType, index) => (
                  <div
                    key={index}
                  
                    className="flex items-center space-x-4 bg-[#ffffff07] border border-[#ffffff33] rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm hover:bg-[#ffffff10] transition-all duration-300"
                  >
                    <div className="bg-[#8ed3fa] rounded-full p-3 sm:p-4 flex-shrink-0">
                      <Image
                        src={userType.icon}
                        alt={`${userType.title} Icon`}
                        width={28}
                        height={28}
                        className="w-6 sm:w-7 h-6 sm:h-7"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg lg:[26px] georgia-text font-normal text-white mb-1 sm:mb-2">
                        {userType.title}
                      </h3>
                      <p className="text-sm sm:text-base  font-normal text-white/80">
                        {userType.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildForEverySection;
