
import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  buttonText: string
  href?: string
  className?: string
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
 
  className ,
}) => {
  return (
    <div
      className={`
        w-[240px] lg:w-fit text-center
          text-[16px]
        lg:text-[18px]
          box-border leading-none
       rounded-full  font-normal hover:opacity-90 transition no-underline
          ${className}
        `}
      >
        {buttonText}
      
    </div>
  )
}

export default Button