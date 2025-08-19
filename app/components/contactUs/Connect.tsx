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
      <div className="flex flex-col gap-[20px] text-white mt-[20px]">
        <div>
          {/* Phone */}
          <a
            href="tel:+11234567890"
            className="flex  items-center gap-[20px] hover:opacity-90 transition"
          >
            <Image
              src="/images/Group 36354.png"
              alt="phone-img"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <p className="text-[20px] font-semibold ">Phone:</p>
              <p className="text-[18px] font-normal leading-[28px]">
                +1 (123) 456-7890
              </p>
            </div>
          </a>
        </div>
        <div>
          {/* email */}
          <a
            href="mailto:support@siggy.com"
            className="flex  items-center gap-[20px] hover:opacity-90 transition"
          >
            <Image
              src="/images/email_1.png"
              alt="phone-img"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <p className="text-[20px] font-semibold ">Email:</p>
              <p className="text-[18px] font-normal leading-[28px]">
                Support@siggy.com.
              </p>
            </div>
          </a>
        </div>
        <div>
          {/* google map */}
          <a
            href="https://www.google.com/maps?q=123+Innovation+Park,+Suite+400,+San+Francisco,+CA+94105"
            className="flex  items-center gap-[20px] hover:opacity-90 transition"
          >
            <Image
              src="/images/location_1234.png"
              alt="phone-img"
              width={40}
              height={40}
            />
            <div className="flex flex-col ">
              <p className="text-[20px] font-semibold ">Locations:</p>
              <p className="text-[18px] font-normal leading-[28px]">
                123 Innovation Park, Suite 400 San Francisco, CA 94105
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
