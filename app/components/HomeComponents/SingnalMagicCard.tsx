import React from 'react'
import Image from 'next/image'

interface SingnalMagicCardProps {
  imageUrl: string;
  title: string;
  subTitle: string;
  altText: string;
}

const SingnalMagicCard : React.FC<SingnalMagicCardProps>  = ({imageUrl,title,subTitle,altText}) => {
  return (
   <div className="flex flex-col justify-center items-center bg-[#161b21] border border-[#ffffff14] rounded-xl p-6 sm:p-8 lg:pt-10 lg:pb-   hover:border-[#8ed3fa] transition-all duration-300">
                   <div className="flex justify-center items-center bg-[#ffffff0f] rounded-full p-4 sm:p-6 lg:w-[106px] lg:h-[106px]">
                     <Image
                       src={imageUrl}
                       alt={altText}
                       width={54}
                       height={40}
                       className="w-8 sm:w-10 lg:max-w-[106px] xl:w-14 h-auto"
                     />
                   </div>
                   <h3 className="text-lg mt-[17px] sm:text-xl md:text-2xl lg:text-[32px] georgia-text font-normal text-center text-white">
                     {title}
                   </h3>
                   <p className="text-sm mt[14px] max-w-[241px] sm:text-base lg:text-base font-inter font-normal leading-[24px]  text-center text-white">
                    {subTitle}
                   </p>
                 </div>
  )
}


export default SingnalMagicCard