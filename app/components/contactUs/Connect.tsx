import React from "react";
import Image from "next/image";
const Connect = () => {
  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-white text-[27px] lg:text-[65px] lg:leading-[75px] font-normal ">
        Let’s <span className="text-[#8ED3FA]">Connect </span>– We’re Here for
        You
      </h2>
      <p className="text-white text-[14px] lg:text-[18px]  font-normal lg:leading-[28px] max-w-[561px] ">
        Whether you’re a telecom leader, enterprise innovator, or partnerour
        team is ready to connect.
      </p>
      <div className="flex flex-col text-white">
        <div>
          {/* Phone */}
          <a
            href="tel:+11234567890"
            className="flex items-start gap-3 hover:text-blue-400 transition"
          >
            <Image
              src="/images/Group 36354.png"
              alt="phone-img"
              width={40}
              height={40}
            />
            <div>
              <p className="">Phone:</p>
              <p className="">+1 (123) 456-7890</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
