import React from "react";
import Image from "next/image";
const OurStory = () => {
  return (
    <section className="py-[50px] lg:py-[100px] px-[20px] lg:px-[60px] text-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row lg:gap-[93px] lg:max-w-[1288px] lg:mx-auto">
          <div className="w-full lg:w-1/2 ">
            <h1 className="font-normal  mb-[14px] lg:mb-[14px] text-[18px] lg:text-[65px] lg:leading-[75px]s">
              Our Story
            </h1>
            <p className="font-normal text-[14px]  mb-[14px] lg:mb-[14px] lg:text-[18px] lg:leading-[28px]">
              At Siggy, our mission began with a simple but powerful idea:
             <span className="font-semibold "> everyone deserves better connection</span>. In a world that depends on
              communication—for families to stay close, for businesses to
              thrive, for critical missions to succeed—we saw a gap. Dropped
              calls. Lagging service. Insecure signals. Disconnection when it
              matters most.
            </p>
            <p className="font-normal  mb-[14px] lg:mb-[14px] text-[14px] lg:text-[18px] lg:leading-[28px]">
              So we built Siggy to change that. With cutting-edge AI and smart
              tower optimization, we’re creating solutions that help <span className="font-semibold"> all of us </span> 
              stay connected—to loved ones, to delivery networks, to emergency
              teams. Whether you're at home, in motion, or miles away from the
              nearest signal, Siggy works quietly in the background, making sure
              your device finds the strongest, most reliable connection—every
              time.
            </p>
            <p className="font-normal  mb-[14px] lg:mb-[14px] text-[14px] lg:text-[18px] lg:leading-[28px]">
              Because connection is more than a signal—<span className="font-semibold">it’s a lifeline</span>. And
              we’re here to make sure you never lose it.
            </p>
          </div>
          <Image
            src="/images/ourStoryImage.png"
            alt="our-story-image"
            height={634}
            width={676}
            className="w-full lg:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
