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

  borderColor = '#0E1412',
  hoverBgColor = '#0E1412',
  hoverTextColor = 'white',
  className = '',

}) => {
  return (
    <button
      onClick={onClick}
      className={`
 
         border-[#0E1412] border-1 rounded-full
        border-${borderColor}
        hover:bg-${hoverBgColor} hover:text-${hoverTextColor}
        transition duration-300
        ${className}
      `}
    >
    
      {label}
  
    </button>
  );
};

export default ButtonTouch;
