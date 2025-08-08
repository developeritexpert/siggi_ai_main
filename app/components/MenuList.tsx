// components/MenuList.jsx

import React from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'How it works', href: '/works' },
  { label: 'Features & Benefits', href: '/features' },
  { label: 'Why Siggy?', href: '/why-siggy' },
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
];

const MenuList = () => {
  return (
       <nav className="flex items-center justify-evenly min-w-[772px]">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-lg font-normal  hover:no-underline transition no-underline text-[#0E1412]"
            >
              {n.label}
            </Link>
          ))}
      
        </nav>
  );
};

export default MenuList;
