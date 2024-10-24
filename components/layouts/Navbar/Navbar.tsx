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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const matches = useMediaQuery('(min-width: 1025px)');
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.body.style.overflow = 'unset';
    };
  }, [toggle]);

  const handleLinkClick = () => {
    if (!matches) {
      setToggle(false);
    }
    setHoveredLink(null);
  };

  const handleMobileMenuClick = (link: NavLink, event: React.MouseEvent) => {
    if (link.menus && (event.target as HTMLElement).classList.contains('dropdown-arrow')) {
      event.preventDefault();
      toggleSubmenu(link.name);
      return;
    }

    handleLinkClick();
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

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  if (!isClient) {
    return null;
  }

  return (
    <nav className="bg-white/70 fixed w-full top-0 z-[90] border border-b-black">
      <div className="w-full max-w-[99rem] py-4 lg:py-8 mx-auto lg:mx-7 2xl:mx-auto px-5 md:px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
          <Image src={Logo} alt="logo" className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]" />
          <div className="md:flex flex-col items-center justify-center text-center hidden">
            <h1 className="uppercase font-extrabold text-black text-xl">gainmax</h1>
            <h2 className="text-black text-sm">Group Pte Ltd</h2>
          </div>
        </Link>

        <AnimatePresence>
          {matches && (
            <motion.div className="flex gap-x-12 justify-between" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative flex flex-col items-center" onMouseEnter={() => handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                  <Link href={link.path || '#'} className="text-black font-bold transition-colors uppercase">
                    {link.name}
                  </Link>

                  {link.menus && hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 w-64 bg-blue-500 backdrop-blur-lg shadow-lg py-2 z-[96]"
                    >
                      {link.menus.map((menu) => (
                        <Link key={menu.path} href={menu.path} className="block px-4 py-2 text-sm uppercase text-center hover:bg-blue-600 transition-colors font-medium text-white" onClick={handleLinkClick}>
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
          <div className="flex flex-col gap-y-2">
            <Link href="/" className="flex flex-row gap-x-2 text-sm items-center">
              <div className="flex border border-black rounded-full p-2">
                <Phone size={20} className="text-black" />
              </div>
              <p className="text-black">+65 6747 5070</p>
            </Link>
            <Link href="/" className="flex flex-row gap-x-2 text-sm items-center">
              <div className="flex border border-black rounded-full p-2">
                <Mail size={20} className="text-black" />
              </div>
              <p className="text-black">admin@gainmax.net</p>
            </Link>
          </div>
        )}

        {/* Toggle Button */}
        {!matches && (
          <div className="space-y-1.5 cursor-pointer z-[99]" onClick={() => setToggle((prevToggle) => !prevToggle)}>
            <motion.span animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }} className="block h-0.5 w-8 bg-black" />
            <motion.span animate={{ width: toggle ? 0 : 32 }} className="block h-0.5 w-8 bg-black" />
            <motion.span animate={{ rotateZ: toggle ? -45 : 0, y: toggle ? -8 : 0 }} className="block h-0.5 w-8 bg-black" />
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {!matches && toggle && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="fixed top-0 left-0 w-full h-screen bg-white z-[98]"
            >
              <div className="flex flex-col px-8 pt-24 pb-8 h-full overflow-y-auto">
                <div className="flex flex-col gap-y-6">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <Link href={link.path || '#'} className="text-black font-bold uppercase text-lg flex-grow" onClick={() => handleLinkClick()}>
                          {link.name}
                        </Link>
                        {link.menus && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubmenu(link.name);
                            }}
                            className="dropdown-arrow p-2"
                          >
                            <motion.span animate={{ rotate: activeSubmenu === link.name ? 180 : 0 }} className="text-2xl block">
                              ↓
                            </motion.span>
                          </button>
                        )}
                      </div>

                      {link.menus && (
                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="flex flex-col gap-y-3 mt-4 pl-4">
                                {link.menus.map((menu) => (
                                  <Link key={menu.path} href={menu.path} className="text-gray-600 uppercase text-base hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
                                    {menu.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-auto pt-8 flex flex-col gap-y-4">
                  <Link href="/" className="flex flex-row gap-x-3 items-center">
                    <div className="flex border border-black rounded-full p-2">
                      <Phone size={20} className="text-black" />
                    </div>
                    <p className="text-black">+65 6747 5070</p>
                  </Link>
                  <Link href="/" className="flex flex-row gap-x-3 items-center cursor-pointer">
                    <div className="flex border border-black rounded-full p-2">
                      <Mail size={20} className="text-black" />
                    </div>
                    <p className="text-black">admin@gainmax.net</p>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
