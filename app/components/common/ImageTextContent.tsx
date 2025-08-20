import React from 'react'
import Image from 'next/image'
import ImageText from './ImageText'
const ImageTextContent = ({backGroundUrl,showSiggyText,headingMaxWidth,headingText1,headingText2,spanText,ParaTextOne,ParaTextTwo,imageParaText1,imageParaText2,imageParaText3,imageParaText4,image}) => {
  return (
    <section className={`px-[20px] pt-[0px] pb-[50px] lg:pb-[100px]  lg:pt-[51px] lg:px-[60px] text-white relative ${backGroundUrl}`}>
    
    {showSiggyText.trim() !== "" &&
         <div className="hidden  lg:absolute lg:right-0     lg:top-[-21px] sm:block">
    {/* <Image src="/images/group_00003.png" alt="siggy_image" width={20} height={20} className="w-full" /> */}

<h2 className="text-[114px] font-extrabold text-[#FFFFFF05] tracking-wide">
  SIGGY
</h2>

     </div>
     }
      <div className="container mx-auto" >
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[30px] md:gap-[79px] mt-[35px] lg:max-w-[1305px] lg:mx-auto">
          <div className="w-full lg:w-1/2 " data-aos="fade-right">
            <h2 className={`w-full font-normal text-[24px]  lg:text-[65px] lg:leading-[75px] mb-[20px] ${headingMaxWidth}`}>
            {headingText1}
              <span className="text-[#8ED3FA]">{spanText}</span>
              {headingText2}
            </h2>
            <p className="text-[14px] lg:text-[18px] font-normal leading-[28px] max-w-[561px] mb-[20px]">
            {ParaTextOne}
            </p>
            <p className="text-[14px] lg:text-[18px] font-normal leading-[28px] max-w-[561px]">
             {ParaTextTwo}
            </p>
            <div className="w-full flex flex-col">
               <ImageText
                imageParaText={imageParaText1}
              />
             
          <ImageText
                imageParaText={imageParaText2}
              />
           <ImageText
                imageParaText={imageParaText3}
              />
           <ImageText
                imageParaText={imageParaText4}
              />
            </div>
          </div>
          <Image
            src={"/images/"+image}
            alt={`${image}-img`}
            height={447}
            width={634}
      className="w-full lg:w-1/2 h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default ImageTextContent