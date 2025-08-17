import React from 'react'
import SingnalMagicCard from './SingnalMagicCard'


const SingalMagic = () => {
  return (
    <section className="py-[50px] lg:py-[100px] px-[20px]  2xl:pt-[162px]">
      {/* Wrapped content inside container with mx-auto for horizontal centering */}
      <div className="container mx-auto">
        
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