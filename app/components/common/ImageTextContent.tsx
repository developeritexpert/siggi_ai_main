import React from 'react'
import Image from 'next/image'
import ImageText from './ImageText'
const ImageTextContent = ({headingText1,headingText2,spanText,ParaTextOne,ParaTextTwo,imageParaText1,imageParaText2,imageParaText3,imageParaText4,image}) => {
  return (
    <section className="px-[20px] pt-[0px] pb-[50px] lg:py-[100px]  lg:px-[60px] text-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[30px] md:gap-[79px] mt-[35px] lg:max-w-[1305px] lg:mx-auto">
          <div className="w-full lg:w-1/2 ">
            <h2 className="w-full font-normal text-[24px]  lg:text-[65px] lg:leading-[75px] mb-[20px] max-w-[400px]">
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