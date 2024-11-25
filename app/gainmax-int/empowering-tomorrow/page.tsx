import React from 'react';
import Logo from '@/assets/logo/svg/logo.svg';
import Image from 'next/image';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';
import AssetEmpoweringTomorrow from '@/assets/int/asset-empowering-tomorrow-int.webp';

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex flex-col mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <div className="flex flex-col text-center gap-y-3">
            <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">EMPOWERING TOMORROW WITH</h1>
            <h1 className="uppercase font-semibold text-green-600 text-2xl md:text-3xl lg:text-5xl">SOLAR ENERGY TODAY</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 items-center justify-center lg:items-start lg:justify-start">
            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[90%]">
              <p className="text-xl md:text-2xl text-justify">
                Initially focusing on subcontracting projects, we expanded our services to encompass Engineering, Procurement, and Construction (EPC) projects, serving clients in solar industry
              </p>
              <p className="text-xl md:text-2xl text-justify">From Development to Maintenance: Your One-Stop Solar Solution for Industrial, Commercial, and Residential Buildings. Empowering Energy and Cost Savings Efficiently.</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col overflow-x-hidden mt-[50px] md:mt-[100px]">
          <Image src={AssetEmpoweringTomorrow} alt="hero" className="w-full h-fullccl lg:h-[50vh] object-cover object-center rounded-3xl" />
        </div>
      </header>
    </main>
  );
}
