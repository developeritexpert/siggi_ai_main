import React from "react";
import Image from "next/image";
const SiggyLearn = () => {
  return (
    <section className="px-[20px] lg:px-[60px] py-[50px] lg:pt-[100px] lg:pb-[100px]">
      <div className="container mx-auto">
        <div>
          <Image
            src="/images/Group 1707479413.png"
            width={1440}
            height={663}
            alt="over-time-img"
            data-aos="zoom-in" className="w-full h-auto"
          />
        
          <p className="text-white text-[18px] lg:text-[24px]   mt-[20px] lg:mt-[46px] font-medium lg:leading-[34px] max-w-[1097px] mx-auto text-center">
            Over time, Siggy learns your habits and locations, fine-tuning your connectivity experience to
ensure smoother streaming, clearer calls, and faster data. Whether you&apos;re  in a busy city, remote area, or on the go, Siggy keeps you connected—smarter, faster, and stronger.
          </p>
        </div>
        <div className="flex flex-col  lg:flex-row mx-auto gap-[30px] lg:gap-0  justify-between max-w-[683px] mt-[42px]">
             <div className="flex flex-col items-center justify-center ">
                <Image
            src="/images/Group 34612.png"
            width={160}
            height={159}
            alt="over-time1-img"
            className="w-[300px] lg:w-[160px] "
          
          />
          <h2 className="font-normal text-[36px] mt-[20px] lg:mt-[10px] lg:text-[32px] text-center text-white ">
             Consumers
          </h2>
            </div>
              
             <div className="flex flex-col items-center justify-center">
                <Image
            src="/images/Group 34610.png"
            width={160}
            height={159}
            alt="over-time1-img"
            className="w-[300px] lg:w-[160px] "

          />
          <h2 className="font-normal text-[36px] mt-[20px] lg:mt-[10px] lg:text-[32px] text-center text-white ">
             Carriers
          </h2>
            </div>
             <div className="flex flex-col items-center justify-center">
                <Image
            src="/images/Group 34611.png"
            width={160}
            height={159}
            alt="over-time1-img"
                      className="w-[300px] lg:w-[160px] "

          />
          <h2 className="font-normal text-[36px] mt-[20px] lg:mt-[10px] lg:text-[32px] text-center text-white ">
           Enterprises
          </h2>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SiggyLearn;
