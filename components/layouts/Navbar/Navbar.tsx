'use clients';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { NavLink, navLinks } from '@/constants/navlinks';

import Logo from '@/assets/logo/svg/logo.svg';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const matches = useMediaQuery('(min-width: 1025px)');
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (!matches) {
      setToggle(false);
    }
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  if (!isClient) {
    return null;
  }

  return <div className="bg-white opacity-80 flex sticky top-0 z-[98]"></div>;
}
