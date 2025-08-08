
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
  href = '/#contact',
  className = '',
  ariaLabel,
}) => {
  return (
    <div>
      <Link
        href={href}
        aria-label={ariaLabel || buttonText}
        className={`
       rounded-full bg-[#0E1412] text-white text-lg font-normal hover:opacity-90 transition no-underline
          ${className}
        `}
      >
        {buttonText}
      </Link>
    </div>
  )
}

export default Button