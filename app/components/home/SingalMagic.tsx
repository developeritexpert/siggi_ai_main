import React from 'react'
import SingnalMagicCard from './SingnalMagicCard'
import Image from 'next/image';

const SingalMagic = () => {
  return (
    <section className="py-[50px] lg:pt-[100px] lg:pb-[25px] px-[20px] lg:px-[60px] 2xl:pt-[162px]
      relative
    ">
       <Image src="/assests/behindTheSignal.png" width={1946} height={459} alt="behind-the-signal" 
       className="absolute left-0 bottom-[51px] z-1 xl:bottom-[-102px]"/>
      {/* Wrapped content inside container with mx-auto for horizontal centering */}
      <div className="container mx-auto relative z-2">
        
        {/*  Ensured heading spacing is responsive and font is correct */}
        <h2 className="text-2xl sm:text-3xl md:text-[65px] sm:mb-[69px] xl:mb-[69px] text-center text-white mb-[30px] font-normal georgia-text">
          <span className="text-white">Behind the </span>
          <span className="text-[#8ed3fa]">Signal</span>
          <span className="text-white"> Magic</span>
        </h2>

        {/*Grid layout with gap between cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SingnalMagicCard 
            imageUrl="/assests/img_group_34565.svg" 
            title="Scan" 
            subTitle="Siggy constantly monitors signal conditions and available towers."
            altText="Scan Icon"
          />
          <SingnalMagicCard 
            imageUrl="/assests/img_group_34566.svg" 
            title="Analyze" 
            subTitle="Our AI evaluates which tower offers the best performance."
            altText="Analyze Icon"
          />
          <SingnalMagicCard 
            imageUrl="/assests/img_group_34567.svg" 
            title="Connect" 
            subTitle="Siggy securely reconfigures your device's connection on the fly."
            altText="Connect Icon"
          />
          <SingnalMagicCard 
            imageUrl="/assests/img_group.svg" 
            title="Optimize" 
            subTitle="Continuous learning ensures better performance over time."
            altText="Optimize Icon"
          />
        </div>
      </div>
    </section>
  );
};


export default SingalMagic