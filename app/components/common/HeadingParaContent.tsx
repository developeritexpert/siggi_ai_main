import React from 'react'

const HeadingParaContent = ({headingText,paraText}) => {
  return (
    <div >
 <h2 className="font-normal text-[18px] lg:text-[40px] mt-[27px]">
           {headingText}
          </h2>
          <p className="font-normal text-[14px] lg:text-[18px] lg:leading-[28px]">
          {paraText}
          </p>
    </div>
  )
}

export default HeadingParaContent