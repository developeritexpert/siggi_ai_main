import React from "react";
import Image from "next/image";
const Connect = () => {
  return (
    <div className="w-full lg:w-1/2 "    data-aos="fade-right"
 data-aos-duration="1000">
      <h2 className="text-white text-[27px] lg:text-[65px] lg:leading-[75px] font-normal max-w-[561px] ">
        Let’s <span className="text-[#8ED3FA] ">Connect </span>– We’re Here for
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
            href="tel:+15412614784"
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
                +1 (541) 261-4784
              </p>
            </div>
          </a>
        </div>
        <div>
          {/* email */}
          <a
            href="mailto:sanjeev@siggy.ai"
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
                 sanjeev@siggy.ai
              </p>
            </div>
          </a>
        </div>
        <div>
          {/* google map */}
          <a
 href="https://www.google.com/maps?q=PO+Box+1032,+Estacada,+OR+97023"            className="flex  items-center gap-[20px] hover:opacity-90 transition"
         target="_blank"
  rel="noopener noreferrer"
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
               PO Box 1032, Estacada, OR 97023
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
