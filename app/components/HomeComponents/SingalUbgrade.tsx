import React from "react";
import Image from "next/image";

const SignalUpgrade = () => {
  return (
    // Signal Upgrade Section
    <section className="py-[50px] w-full  px-[16px] md:px-[60px]  bg-gradient-to-b from-[#90d5fd] to-[#005c93]  p-4 sm:p-12 lg:px-[150px] lg:py-[64px] ">
      {/* <div
        className="relative w-full "
        style={{
          backgroundImage: "url('/images/img_mask_group.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
        {/* Signal Towers - Hidden on mobile */}
        {/* <div className="hidden lg:block absolute top-8 right-0 overflow-hidden ">
          <div className="flex space-x-4">
            <Image
              src="/images/img_vector.svg"
              alt="Signal Tower"
              width={98}
              height={142}
              className="w-16 h-auto"
            />
            <Image
              src="/images/img_vector_white_a700.svg"
              alt="Signal Tower"
              width={56}
              height={138}
              className="w-12 h-auto"
            />
            <Image
              src="/images/img_vector_white_a700_140x134.svg"
              alt="Signal Tower"
              width={136}
              height={142}
              className="w-20 h-auto"
            />
            <Image
              src="/images/img_vector_white_a700_138x134.svg"
              alt="Signal Tower"
              width={136}
              height={140}
              className="w-20 h-auto"
            />
            <Image
              src="/images/img_vector_white_a700_136x140.svg"
              alt="Signal Tower"
              width={142}
              height={138}
              className="w-20 h-auto"
            />
          </div>
        </div> */}

        {/* Main Content */}
       
          {/* Feature Box */}
         
            <div className="w-full container mx-auto">
              <div className="w-full item-center flex justify-center">
                <h2 className="max-w-[1033px] text-2xl sm:text-3xl md:text-4xl lg:text-[65px] georgia-text font-normal leading-tight text-center text-[#0e1412] mb-8 sm:mb-12 lg:mb-16">
                  The Signal Upgrade You Didn&apos;t Know You Needed
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Features */}
              <div className="flex flex-col space-y-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                  <div className="border-2 border-[#0e1412] rounded-full p-3 sm:p-4">
                    <Image
                      src="/images/img_group_5.svg"
                      alt="Feature Icon"
                      width={28}
                      height={28}
                      className="w-6 sm:w-7 h-6 sm:h-7"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-bold text-[#0e1412]">
                    Stronger Signal, Fewer Drops
                  </h3>
                  <p className="text-sm md:text-[20px]  font-normal text-[#0e1412] leading-relaxed">
                    Enjoy more reliable calls and faster data—even in weak  coverage areas.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                  <div className="border-2 border-[#0e1412] rounded-full p-3 sm:p-4">
                    <Image
                      src="/images/img_group_4.svg"
                      alt="Feature Icon"
                      width={32}
                      height={32}
                      className="w-6 sm:w-7 h-6 sm:h-7"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-bold text-[#0e1412]">
                    Works Anywhere, Anytime
                  </h3>
                  <p className="text-sm md:text-[20px] font-inter font-normal text-[#0e1412] leading-relaxed">
                    Whether you&apos;re at home, commuting, or traveling, Siggy
                    adapts to your environment.
                  </p>
                </div>
              </div>

              {/* Center Graphic */}
              <div className="flex flex-col items-center relative">
                <Image
                  src="/images/group_36366123.png"
                  alt="Central Graphic"
                  width={474}
                  height={596}
                  className="w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[474px] h-auto"
                />
              </div>

              {/* Right Features */}
              <div className="flex flex-col space-y-8">
                {/* Feature 3 */}
                <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                  <div className="border-2 border-[#0e1412] rounded-full p-3 sm:p-4">
                    <Image
                      src="/images/img_group_3.svg"
                      alt="Feature Icon"
                      width={28}
                      height={28}
                      className="w-6 sm:w-7 h-6 sm:h-7"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-bold text-[#0e1412]">
                    Private & Secure
                  </h3>
                  <p className="text-sm md:text-[20px] font-inter font-normal text-[#0e1412] leading-relaxed">
                    Your personal data stays protected. Siggy only uses
                    what&apos;s necessary to enhance performance.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                  <div className="border-2 border-[#0e1412] rounded-full p-3 sm:p-4">
                    <Image
                      src="/images/img_group_2.svg"
                      alt="Feature Icon"
                      width={28}
                      height={28}
                      className="w-6 sm:w-7 h-6 sm:h-7"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-bold text-[#0e1412]">
                    Battery Efficient
                  </h3>
                  <p className="text-sm md:text-[20px] font-inter font-normal text-[#0e1412] leading-relaxed">
                    Optimized to run in the background without draining your
                    phone&apos;s power.
                  </p>
                </div>
              </div>
            </div>
        
        
     
    </section>
  );
};

export default SignalUpgrade;
