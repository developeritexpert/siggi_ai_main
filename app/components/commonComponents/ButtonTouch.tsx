// components/ButtonTouch.tsx

import React from 'react';

interface ButtonTouchProps {
  label: string;
  onClick?: () => void;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const ButtonTouch: React.FC<ButtonTouchProps> = ({
  label,
  onClick,
  textColor = '#0E1412',
  borderColor = '#0E1412',
  hoverBgColor = '#0E1412',
  hoverTextColor = 'white',
  className = '',
  icon,
  iconPosition = 'right',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-[38px] py-[14px] border-[#0E1412] border-1 rounded-[170px]
        text-lg
        
        cursor-pointer
        border-${borderColor}
        hover:bg-${hoverBgColor} hover:text-${hoverTextColor}
        transition duration-300
        ${className}
      `}
    >
      {icon && iconPosition === 'left' && icon}
      {label}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default ButtonTouch;
