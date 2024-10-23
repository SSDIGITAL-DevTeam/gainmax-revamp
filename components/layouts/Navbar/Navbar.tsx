'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { NavLink, navLinks } from '@/constants/navlinks';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import Logo from '@/assets/logo/svg/logo.svg';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const matches = useMediaQuery('(min-width: 1025px)');
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLinkClick = () => {
    if (!matches) {
      setToggle(false);
    }
    setHoveredLink(null);
  };

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredLink(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 100);
  };

  if (!isClient) {
    return null;
  }

  return (
    <nav className="bg-white opacity-80 flex sticky top-0 z-[90]">
      <div className="w-full max-w-[99rem] py-4 lg:py-8 mx-auto lg:mx-7 2xl:mx-auto px-5 md:px-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
          <Image src={Logo} alt="logo" className="w-[90px] h-[90px]" />
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="uppercase font-extrabold text-black text-2xl">gainmax</h1>
            <h2 className="text-black">Group Pte Ltd</h2>
          </div>
        </Link>

        {/* Menu */}
        <AnimatePresence>
          {matches && (
            <motion.div className="flex gap-x-10 justify-between" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative group" onMouseEnter={() => handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                  <Link href={link.path || '#'} className="text-black font-bold transition-colors uppercase">
                    {link.name}
                  </Link>

                  {link.menus && hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-blue-500 opacity-40 shadow-lg py-2 z-[96]"
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.menus.map((menu) => (
                        <Link key={menu.path} href={menu.path} className="block px-4 py-2 text-sm capitalize hover:bg-blue-600 transition-colors font-medium text-white" onClick={handleLinkClick}>
                          {menu.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon Menu */}
        {matches && (
          <div className=" flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-2 text-sm items-center">
              <div className="flex border border-black rounded-full p-2">
                <Phone size={20} className="text-black" />
              </div>
              <p className="text-black">+65 6747 5070</p>
            </div>
            <div className="flex flex-row gap-x-2 text-sm items-center">
              <div className="flex border border-black rounded-full p-2">
                <Mail size={20} className="text-black" />
              </div>
              <p className="text-black">admin@gainmax.net</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
