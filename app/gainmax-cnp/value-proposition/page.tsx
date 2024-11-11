import React from 'react';
import Logo from '@/assets/logo/svg/logo.svg';
import Image from 'next/image';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';
import AssetPartnership from '@/assets/cnp/assets-partnership-cnp.webp';

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container flex flex-col items-center justify-center w-full gap-y-24">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl text-center">
            Value <span className="text-orange-300">Proposition</span>
          </h1>
        </div>
      </header>
    </main>
  );
}
